var sid = "ACd929f6aef3f12e297a5c171fda45ab1b";
var auth_token = "808d8540f1c6fd82029a9a3b21ffe0a6";

var twilio = require("twilio")(sid, auth_token);

twilio.messages
  .create({
    from: "+13205253571",
    to: "+250735134793",
    body: "this is a testing message ",
  })
  .then((res) => console.log("message sent"))
  .catch((err) => {
    console.log(err);
  });
