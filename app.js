const express = require("express")
const bodyParser = require("body-parser")
const flash = require("connect-flash") 
const session = require("express-session")
const methodOverride = require("method-override")

const app = express()


// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs")
app.use(express.static('public'));

// setting session
app.use(session({
    secret: process.env.SECRET || 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use(flash())
app.use(methodOverride("_method"));

app.use("/", require("./routes/authRoutes"))
app.use("/home", require("./routes/homeRoutes"))
app.use("/api", require("./routes/apiRoutes"))


const port = 3000

app.listen(port, () => console.log(`Listening on port ${port}`))