const router = require("express").Router()
const User = require("../models/User")

router.get("/login/:login/password/:password/employeeID/:_id", (req, res) => {
    const {login, password, _id} = req.params
    
    if(login && password){
        if(login == process.env.LOGIN && password == process.env.PASSWORD){
            const users = await User.findById(_id)
                .then(user => {
                    res.json(res.json({user, admin: {login, password}}))
                })
            
        }else{
            res.send("Login yoki parol tasdiqlanmadi")
        }
    }else{
        res.send("Login yoki parol kiritilmadi")
    }
})
module.exports = router