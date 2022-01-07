const mysql = require('mysql');
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"cdac11",
};
async function connectionCheck(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connected");
    await connection.endAsync();
}

const addmsg=async(msg)=>{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connected");
    let sql =`insert into msg(massage) values(?)`;
    connection.queryAsync(sql,[msg.massage]);
    await connection.endAsync();
}
const selectmsg=async()=>{
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connected");
    let sql =`SELECT * FROM msg`;
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    return list;
}
module.exports ={selectmsg,addmsg}