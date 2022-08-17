const mongoose = require("mongoose")
    const userSchema = mongoose.Schema({    
        name: String,
        lastname: String,
        fullname: String,
        gender: String,
        father: String,
        mother: String,
        birthday: String,
        phone: String,
        phone2: String,
        phone3: String,
        address: String,
        passport: String,
        picture: String,
        bankcard: String,
        phone_numbers: String,
        sharif: String,
        sentabrdan: String,
        joining: String
    })

    
const User = mongoose.model("user", userSchema)

module.exports = User