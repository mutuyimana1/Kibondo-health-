const mongoose = require("mongoose");

const dbconnect=async()=>{
    const connect= await mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
    })

    console.log(`Database connected successfully: ${connect.connection.host}`)

};

module.exports =dbconnect