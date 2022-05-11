const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

// const db = mysql.createPool({
//     host: 'innodb-003.cafe24.com',
//     user: 'bsksbamboo',
//     password: 'answnsgh12@@',
//     database:'bsksbamboo',
// });



app.get("/employees", (req, res) => {
  db.query("SELECT * FROM BAMBOO_TABLE ORDER BY BAM_SEQ DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.post("/create", (req, res) => {

    const BAM_TITLE = req.body.BAM_TITLE
    const BAM_CONTENT = req.body.BAM_CONTENT

    db.query(
        "INSERT INTO BAMBOO_TABLE ( BAM_TITLE , BAM_CONTENT , BAM_TIME) VALUES (?,?,now())",
        [BAM_TITLE,BAM_CONTENT],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
            
          }
        }
      );
});

app.listen(60000, () =>{
    console.log('running on port 60000');
});


//유튜브 16:34초부터 다시 시작