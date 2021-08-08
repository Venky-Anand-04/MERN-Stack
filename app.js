//========================
//NPM Modules
//========================
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

require("dotenv").config()

//========================
//using config
//========================
const app = express()
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//========================
//MONGO DB CONNECTION
//========================
const uri = process.env.DB_CONNECTION_STRING

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

const connection = mongoose.connection;
connection.once("open",()=>{
	console.log("DB is connected Successfully!")
})

//Routes import ============
const comicRoutes = require("./routes/comics.routes.js")


//using the Routes =========
app.use("/comics", comicRoutes)

//========================
// App Listening Port
//========================
app.listen(port,()=>{
	console.log(`The Server is started and running in the PORT: ${port}`)
})








