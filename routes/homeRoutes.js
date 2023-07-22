const router = require("express").Router();
const pool = require("../config/db_connection");

router.get("/", async (req, res) => {
  try {
    // Use placeholders to prevent SQL injection
    const query = 'SELECT * FROM questions';

    try {
      // Execute the query
      const [rows, fields] = await pool.query(query);

      // Parse the data to use it in the render method
      const data = JSON.parse(JSON.stringify(rows));

      res.render("home", {
        data,
        success: req.flash("success"),
        error: req.flash("error")
      });
    } catch (error) {
      throw error;
    }
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/nilai", async (req, res) => {
  try {
    // Use placeholders to prevent SQL injection
    const query = 'SELECT * FROM siswa';

    try {
      // Execute the query
      const [rows, fields] = await pool.query(query);

      // Parse the data to use it in the render method
      const data = JSON.parse(JSON.stringify(rows));

      console.log(data[0]); // Assuming you want to log the first data for debugging purposes

      res.render("dataSoal", {
        data
      });
    } catch (error) {
      throw error;
    }
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/delete/soal/:id", async (req, res) => {
  try {
    const idSoal = req.params.id;

    // Use placeholders to prevent SQL injection
    const query = 'DELETE FROM questions WHERE idSoal = ?';
    const values = [idSoal];

    try {
      // Execute the query
      await pool.query(query, values);

      req.flash("success", "Data Berhasil dihapus");
      res.redirect("/home");
    } catch (error) {
      throw error;
    }
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
