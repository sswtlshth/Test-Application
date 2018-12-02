var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var morgon = require('morgan');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

var port = 8000;

//routes
app.post('/',function(req,res){
    if(req.body.test === 'java'){
        res.json([{ question_id : "Java_01", question : "Which is a reserved word in the Java programming language?", options: ["method","native","subclasses","reference"],answer : "native",test_name: "java" },
        { question_id : "Java_02", question : "Which is a valid keyword in java?", options: ["interface","string","Float","unsigned"],answer : "interface", test_name: "java" },
        { question_id : "Java_03", question : "Which is the valid declarations within an interface definition?", options: ["public double methoda();","public final double methoda();","static void methoda(double d1);","protected void methoda(double d1);"],answer : "public double methoda();", test_name: "java" }]
     );
    }else if( req.body.test === 'python'){
        res.json([{ question_id : "Python_01", question : "Which is a reserved word in the Python programming language?", options: ["method","native","subclasses","reference"],answer : "native",test_name: "Python" },
        { question_id : "Python_02", question : "Which is a valid keyword in Python?", options: ["interface","string","Float","unsigned"],answer : "interface", test_name: "Python" },
        { question_id : "Python_03", question : "Which is the valid declarations within an interface definition?", options: ["public double methoda();","public final double methoda();","static void methoda(double d1);","protected void methoda(double d1);"],answer : "public double methoda();", test_name: "Python" }
    ])
    }
});

app.post('/check_answer',(req,res) => {
    res.send({
        question_id : req.body.question_id,
        correct : true
    })
})

app.listen(port);