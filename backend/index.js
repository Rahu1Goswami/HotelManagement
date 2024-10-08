// server.js
import express from  express
import db from './database/connection.js'
const app = express();
const port = 3000;

app.use(express.json()); // To parse JSON bodies

// Sample route to fetch all records from a table
app.get('/booking', (req, res) => {
    const sql = 'SELECT * FROM users'; // Assuming a 'users' table in your database
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching data');
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
