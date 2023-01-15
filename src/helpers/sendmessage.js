const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "6a407695",
  apiSecret: "l3CsJm3BQ3dcfbei",
});

const from = "vonage APIS";
const number = 250782099213;
const message = "req.body.message";
nexmo.message.sendSms(from, number, message);

// export default nexmo;
