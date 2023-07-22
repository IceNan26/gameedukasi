const router = require("express").Router();
const pool = require("../config/db_connection");

router.get("/getData", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM questions");
    res.status(200).json({
      statusCode: 200,
      data,
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/postDataWeb", async (req, res) => {
  try {
    const { idSoal, a1, a2, a3, a4, correct, questions } = req.body;

    // Use placeholders to prevent SQL injection
    const query =
      "INSERT INTO questions (idSoal, a1, a2, a3, a4, correct, questions) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [idSoal, a1, a2, a3, a4, correct, questions];

    try {
      // Execute the query
      const [result] = await pool.query(query, values);

      console.log(result); // Assuming you want to log the result for debugging purposes

      // Set a flash message for success
      req.flash("success", "Data berhasil ditambahkan");
      res.redirect("/home");
    } catch (error) {
      // Set a flash message for the error (using the error.sqlMessage)
      req.flash("error", error.sqlMessage);
      res.redirect("/home");
    }
  } catch (error) {
    // Handle unexpected errors
    res.status(500).json(error);
  }
});

router.post("/postScore", async (req, res) => {
  try {
    const { namaSiswa, score } = req.body;
    console.log(req.body);

    // Check if namaSiswa is provided or not
    const studentName = namaSiswa ? namaSiswa : "-";

    // Use placeholders to prevent SQL injection
    const query = "INSERT INTO siswa (namaSiswa, score) VALUES (?, ?)";
    const values = [studentName, score];

    try {
      // Execute the query
      const [result] = await pool.query(query, values);

      res.status(200).json({
        data: {
          id: result.insertId, // Assuming Siswa table has an auto-incrementing ID column
          namaSiswa: studentName,
          score,
        },
      });
    } catch (error) {
      throw error;
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/postScoreWeb", async (req, res) => {
  try {
    const { namaSiswa, score } = req.body;

    // Check if namaSiswa is provided or not
    const studentName = namaSiswa ? namaSiswa : "-";

    // Use placeholders to prevent SQL injection
    const query = "INSERT INTO siswa (namaSiswa, score) VALUES (?, ?)";
    const values = [studentName, score];

    try {
      // Execute the query
      const [result] = await pool.query(query, values);

      console.log(result); // Assuming you want to log the result for debugging purposes

      // Redirect the user to "/soal"
      res.redirect("/soal");
    } catch (error) {
      throw error;
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
