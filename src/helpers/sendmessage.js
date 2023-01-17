const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const sendSms=async(phone,message)=>{

  const data = {
    to:phone,
    from:process.env.SENDER || "umuhire",
    unicode:0,
    sms:message,
    action:'send-sms'
  }
  try {
    const resp= await axios.post("https://api.mista.io/sms",data,{headers:{
      "x-api-key":process.env.API_KEY
    }});
    console.log(resp.data);
  } catch (error) {
    console.log(error.message);
  }



}
module.exports=sendSms;