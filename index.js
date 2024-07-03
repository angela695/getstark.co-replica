const express = require("express") ;
const app = express() ;
const path = require("path") ;
const port = 8000 ;

app.set("view engine " , "ejs") ;
app.set("views" , path.join(__dirname , "/views")) ;
app.use(express.static(path.join(__dirname , "public"))) ;
app.use(express.urlencoded({extended : true})) ;
app.use(express.json()) ;

app.listen(port , () => {
    console.log(`listening on port ${port}`) ;
}) ;

app.get("/" , (req, res) => {
    res.render("index.ejs") ;
}) ;

app.get("/sign-in" , (req, res) => {
    res.render("sign-in.ejs") ;
}) ;

app.get("/business-trial" , (req, res) => {
    res.render("business-trial.ejs") ;
}) ;
app.post("/" , (req, res) => {
    res.redirect("/") ;
}) ;
