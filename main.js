const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const{addmsg,selectmsg}=require("./user")

app.get("/msg",async(req,res)=>{
    const list = await selectmsg();
    res.json(list);
});
app.post("/add-msg",async(req,res)=>{
    const msg = req.body;
    await addmsg(msg);
    res.json({msgg:"msg added succesfully"})
});
app.listen(4042,()=>console.log("server started"))