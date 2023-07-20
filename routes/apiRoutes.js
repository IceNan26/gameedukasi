const router = require("express").Router()
const Question = require("../models/question")
const Siswa = require("../models/score")

router.get("/getData", async (req,res) => {
    try {
        const data = await Question.findAll()
        res.status(200).json({
            statusCode: 200,
            data
        })
    } catch (error) {
        res.send(error)
    }
})

router.post("/postDataWeb", async (req,res) => {
    try {
        const {idSoal, a1, a2, a3, a4, correct,questions} = req.body;
        const newSoal = Question.build({
            idSoal,a1,a2,a3,a4,correct,questions
        })

        const savedSoal = await newSoal.save()
        req.flash("success", "data berhasil ditambahkan")
        res.redirect("/home")
    } catch (error) {
        console.error(error)
        res.redirect("/")
    }
})

router.post("/postScore", async (req,res) => {
    try {
        const {namaSiswa, score} = req.body;
        if(!namaSiswa){
            const newSiswa = Siswa.build({
                namaSiswa: "-",
                score
            })
            const savedSiswa = await newSiswa.save()
            res.status(200).json({
                data: savedSiswa
            })
        } else {
            const newSiswa = Siswa.build({
                namaSiswa,
                score
            })
            const savedSiswa = await newSiswa.save()
            res.status(200).json({
                data: savedSiswa
            })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
router.post("/postScoreWeb", async (req,res) => {
    try {
        const {namaSiswa, score} = req.body;
        if(!namaSiswa){
            const newSiswa = Siswa.build({
                namaSiswa: "-",
                score
            })
            const savedSiswa = await newSiswa.save()
            console.log(savedSiswa)
            res.redirect("/soal")
        } else {
            const newSiswa = Siswa.build({
                namaSiswa,
                score
            })
            const savedSiswa = await newSiswa.save()
            console.log(savedSiswa)
            res.redirect("/soal")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router