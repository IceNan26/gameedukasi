const router = require("express").Router()
const Question = require("../models/question")
const Siswa = require("../models/score")

router.get("/", async (req,res) => {
    const data = await Question.findAll()
    const question = JSON.stringify(data);

    const parsedQuestion = JSON.parse(question);
    res.render("home",{
        data : parsedQuestion,
        success: req.flash("success"),
        error: req.flash("error")
    })
})

router.get("/nilai",async (req,res) => {
    try {
        const data = await Siswa.findAll()
        const question = JSON.stringify(data);
    
        const parsedQuestion = JSON.parse(question);
        console.log(parsedQuestion[0])
        res.render("dataSoal",{
            data : parsedQuestion
        })
    } catch (error) {
        
    }
})

router.delete("/delete/soal/:id", async (req,res) => {
    await Question.destroy({
        where: {
            idSoal : req.params.id
        }
    })
    req.flash("success","Data Berhasil dihapus")
    res.redirect("/home")
})


module.exports = router