// server.js
import express from  express
import db from './database/connection.js'
const app = express();
const port = 4000;

app.use(express.json()); // To parse JSON bodies

// Sample route to fetch all records from a table
app.post('/book', (req, res) => {
    const { id, firstName, middleName, lastName, dob, gender, phone, email, identityProof } = req.body;
    
    const sql = `INSERT INTO bookings (id, first_name, middle_name, last_name, dob, gender, phone, email, identity_proof)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
    db.query(sql, [id, firstName, middleName, lastName, dob, gender, phone, email, identityProof], (err, result) => {
      if (err) {
        console.error('Error inserting data into MySQL:', err);
        res.status(500).json({ error: 'Database error' });
      } else {
        res.json({ message: 'Booking saved successfully' });
      }
    });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
