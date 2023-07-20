const router = require("express").Router()
const Admin = require("../models/admin")

router.get("/",(req,res) => {
    res.render("login", {
        success: req.flash("success"),
        error: req.flash("error")
    })
})

router.post("/login", async (req,res) => {
    try {
        const {username,password} = req.body;
        const admin = await Admin.findOne({ where: { username: username } })
        if(!admin) {
            req.flash("error","Username atau Password tidak Valid")
            res.redirect("/")
        } else {
            if(password === admin.dataValues.password) {
                req.flash("success", "Berhasil Login")
                res.redirect("/home")
            } else {
                req.flash("error","Username atau Password tidak Valid")
                res.redirect("/")
            }
        }
    } catch (error) {
        console.error(error)
    }
})

module.exports = router