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
    const BAM_TIME = req.body.BAM_TIME

    db.query(
        "INSERT INTO BAMBOO_TABLE ( BAM_TITLE , BAM_CONTENT ,BAM_TIME) VALUES (?,?,NOW())",
        [BAM_TITLE,BAM_CONTENT,BAM_TIME],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
            
          }
        }
      );
});



app.post("/report", (req, res) => {

  const report_title = req.body.report_title
  const report_content = req.body.report_content
  const report_pid = req.body.report_pid
  const report_date = req.body.report_date
  

  db.query(
      "INSERT INTO BAMBOO_REPORT (report_title , report_content , report_pid, report_date) VALUES (?,?,?,NOW())",
      [report_title,report_content,report_pid,report_date],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
          console.log(err);
        }
      }
    );
});

app.listen(8001, () =>{
    console.log('running on port 60000');
});


//유튜브 16:34초부터 다시 시작