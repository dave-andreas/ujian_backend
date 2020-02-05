const mysql = require('mysql')

const mysqldb = mysql.createConnection({
    host:'localhost',
    user:'david',
    password:'!2#)9*RoY',
    database:'ujian_backend',
    port:'3306'
})

module.exports=mysqldb