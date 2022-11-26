const dotenv = require("dotenv");

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+250 782 099 213",
    to: "+250780848040",
  })
  .then((message) => console.log(message.sid));
