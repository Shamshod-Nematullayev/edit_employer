const router = require("express").Router()
const User = require("../models/User")

router.get("/login/:login/password/:password/employeeID/:_id",async (req, res) => {
    const {login, password, _id} = req.params
    
    if(login && password){
        if(login == process.env.LOGIN && password == process.env.PASSWORD){
            const users = await User.findById(_id)
                .then(user => {
                    res.render("emp.ejs",{user, admin: {login, password}})
                })
            
        }else{
            res.send("Login yoki parol tasdiqlanmadi")
        }
    }else{
        
        res.send("Login yoki parol kiritilmadi")
    }
})

router.post("/login/:login/password/:password/employeeID/:_id",async (req, res) => {
    const {login, password, _id} = req.params
    
    if(login && password){
        if(login == process.env.LOGIN && password == process.env.PASSWORD){
            const users = await User.findByIdAndUpdate(_id, {$set: req.body})
                .then(user => {
                    res.send('Yangilandi')
                })
            
        }else{
            res.send("Login yoki parol tasdiqlanmadi")
        }
    }else{
        
        res.send("Login yoki parol kiritilmadi")
    }
})
module.exports = router