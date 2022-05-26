import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";

// Google maps api imports
import GoogleAPI from "./components/GoogleAPI";

// Paypal imports
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./components/Checkout";
import "./styles.css";

function App() {
  return (
    <PayPalScriptProvider
      // Defining client ID
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/googlemap" element={<GoogleAPI />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
