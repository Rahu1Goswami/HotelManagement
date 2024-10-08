import mysql from 'mysql2'
const db=mysql.createConnection({
    "host":"localhost:3306",
    "user":"root",
    "password":"30thseptember",
    "database":"hotelmanagement"
})

export default db