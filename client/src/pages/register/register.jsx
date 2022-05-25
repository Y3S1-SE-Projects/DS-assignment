import React, {useState} from "react";
import axios from "axios";
import "./register.css";

function Register() {
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function Register (event) {
        event.preventDefault();

        const newUser = { username, email , password}
        axios.post(`http://localhost:8800/auth/register`, newUser).then(() => {
            alert("Registration Added")
        }).catch((error) => {
            alert(error.message);
            console.log(error)
        })
    }

    return (
        <div className="register">
        <form onSubmit={Register} className="lContainer">

            <h2>Registration</h2>

            <input
                type="email"
                className="lInput"
                placeholder="Enter your Email"
                id="number"
                onChange={(event)=> {setEmail(event.target.value)}}
            />
            <input
                type="text"
                className="lInput"
                placeholder="Enter your username"
                id="number"
                onChange={(event)=> {setUsername(event.target.value)}}
            />
            <input
                type="password"
                className="lInput"
                placeholder="Enter your Password"
                id="number"
                onChange={(event)=> {setPassword(event.target.value)}}
            />
            <input
                type="password"
                className="lInput"
                placeholder="Re-enter your Password"
                id="number"
                onChange={(event)=> {setPassword(event.target.value)}}
            />
            <input
                type="submit"
                className="lButton"
                value="Submit"/>
        </form>
        </div>
    )
}

export default Register;