# DS-assignment

## Project Requirements
Assume that you have been asked to develop a hotel reservation platform. Following are the requirements
given by the client and/or the Business Analyst. 

• The system should have a web interface where travelers can reserve hotel rooms.
• A service should be there where hotels can add/update/delete reservation information.
• A service should be there where travelers can reserve rooms and cancel the reservation.
• A traveler may make multiple reservations as long as the dates don’t clash.
• Once a reservation is made, a traveler may (optionally) reserve a taxi, where a request may be
sent to a taxi service (so there should be a third party taxi service).
• The payment for the reservations can be made using credit cards. Not all reservations may require
pre-payment (it’s upto the hotel to decide whether pre-payment is required or not).
• The system can connect to a payment gateway for credit card transactions. The information that
should be submitted includes the credit card number, amount, CVC number (3 digit no. at the
back of the credit card) and card holder’s name.
• Once the payment is made the user should be given a confirmation of the appointment via SMS
and email. These confirmations may be sent through third-party sms and email services.
• Hotel location may be displayed through the google map service. 


## Getting Started with PayPal - Installation :computer:
This is the paypal gateway integration

```
1. To get your login details in the sandbox, click on "Accounts" in the left panel and then 
   select the personal account type and click on view details which will sho the email and password
   
2. Create a .env file and enter your details here 
   PAYPAL_CLIENT_ID= <your client ID>
   PAYPAL_CLIENT_SECRET= <your client secret>

3.  Always rememeber when promted to login when you are iin the process of payment always 
    give the "personal account" details

```

## Getting Started with Google Maps API - Installation :computer:

Features?

1. Google maps in React
2. Adding Markers
3. Panning and zooming maps
4. Disable default controls
5. Places Autocomplete
6. Directions Service
7. Directions Renderer on map


## Starting the app

Create an API in the google developers console [https://console.developers.google.com](https://console.developers.google.com), make sure to enable billing for the google project, otherwise you may get a warning as _development purposes only_.

Add a `.env` file or `.env.local` in the project root and specify your API key as `REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here`

In the project directory, you can run:

```
yarn install
yarn start
```

OR using npm

```
npm install
npm start
```
