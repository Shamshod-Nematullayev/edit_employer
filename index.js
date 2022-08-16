require("dotenv").config()
require("./config")
const express = require("express")
const app = express()
const ejs = require("ejs")

app.use(express.json())
app.use(express.urlencoded())
// app.set("view engine", ejs)
// Login Router
app.use(require("./routers/login"))

const port = process.env.PORT || 3000
app.listen(port, () => console.log("Server running on port" + port))