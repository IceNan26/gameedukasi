const router = require("express").Router();
const pool = require("../config/db_connection");

router.get("/", (req, res) => {
  res.render("login", {
    success: req.flash("success"),
    error: req.flash("error"),
  });
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Use placeholders to prevent SQL injection
    const query = 'SELECT * FROM admin WHERE username = ?';
    const values = [username];

    try {
      // Execute the query
      const [rows] = await pool.query(query, values);

      if (rows.length === 0) {
        // If admin with the given username does not exist
        req.flash("error", "Username atau Password tidak Valid");
        res.redirect("/");
      } else {
        // Check if the password matches
        const admin = rows[0];
        if (password === admin.password) {
          req.flash("success", "Berhasil Login");
          res.redirect("/home");
        } else {
          req.flash("error", "Username atau Password tidak Valid");
          res.redirect("/");
        }
      }
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
