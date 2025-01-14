const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nihaal@1903", // Adjust to your password
  database: "shoe_store_database", // Ensure this is your correct DB name
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// API route to save billing details
app.post("/BillingPage.js", (req, res) => {
  const { name, email, address, city, zip, payment } = req.body;

  const query =
    "INSERT INTO billingdetails(name, email, address, city, zip, payment_method) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(query, [name, email, address, city, zip, payment], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Failed to save data.");
    }
    res.status(200).send("Billing details saved successfully.");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
