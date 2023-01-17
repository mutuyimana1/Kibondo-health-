// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

const accountSid = "ACd929f6aef3f12e297a5c171fda45ab1b";
const authToken = "808d8540f1c6fd82029a9a3b21ffe0a6";
const twilio = require("twilio")(accountSid, authToken);

twilio.messages
  .create({
    // username: "iradukundaj15@gmail.com",
    body: "Hello from Twilio",
    from: "+13205253571",
    to: "+250735134793",
  })
  .then((message) => console.log("message has send"));
