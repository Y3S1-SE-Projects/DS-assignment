import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

// Authentication using brcypt and JWT token for regsitration
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    const { name, email } = req.body;

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "sachinikuruppu@outlook.com",
        pass: "Neon@013",
      },
    });

    const mailOptions = {
      from: "sachinikuruppu@outlook.com",
      to: `${email}`,
      subject: "User Account Confirmation",
      text: "Your user account created Thank you!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

// Authentication using brcypt and JWT token for login
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
