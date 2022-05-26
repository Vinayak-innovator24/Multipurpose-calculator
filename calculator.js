const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
    let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);

    let result = n1*n2;
    res.send("The result is " + result);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
    
    let ht = parseFloat(req.body.ht);
    let wt = parseFloat(req.body.wt);

    let bmi = wt/(ht*ht);
    res.send("The BMI is " + bmi);
});

// app.get("/contact", function(req,res){
//     res.send("<h3>Contact me at my vinayak.pande2403@gmail.com</h3>");
// });

app.listen(process.env.PORT || 3003, function(){
    console.log("Server started at port 3003");
});

