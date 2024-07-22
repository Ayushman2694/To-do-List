const express = require("express");
const bodyParser = require("body-parser");
const day = require(__dirname+"/date.js");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

const port = process.env.PORT || 5000;
let items  = [];


app.get("/",(req,res)=>{
    
    let date = day();
    res.render("index",{date:date,newListItems:items});
    
});

app.post("/",(req,res)=>{
    item=req.body.newItem;

    items.push(item);
    res.redirect("/");
})

app.listen(port,()=>{
    console.log("server is listening to the "+ port);
})