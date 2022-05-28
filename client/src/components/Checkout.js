// Imports
import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.jpg";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

import "../styles.css";

// Checkout component wher user will get the option to select the payment method
const Checkout = () => {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 800,
  };

  return (
    <div className="checkout">
      <h1>PayPal Checkout</h1>
      <p className="checkout-title">Checkout</p>
      <p className="checkout-description">
        You will be redirected to the PapyPal Gateway where you will have to
        complete and process your payment details
      </p>
      <h1 className="checkout-price">USD 800</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />

      <div className="separator"></div>
      <div className="paypal">
        <p className="checkout-title">
          Pay securely with authentication and validation, PAY WITH PAYPAL
        </p>
        <div className="paypal-button-container">
          <PaypalCheckoutButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
