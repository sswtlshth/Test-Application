var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
//var morgon = require('morgan');
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());
var port = 9001;

app.get('/test_names', ( req,res ) => {
  res.json(
      ['java','python']
  );
});
//routes
app.post('/questions',function(req,res){
    if(req.body.test === 'java'){
        res.json( {"Java_01": {question : "Which is a reserved word in the Java programming language?",
                              options: ["method","native","subclasses","reference"],
                            //  answer : "native",
                              test_name: "java"
                             },
                  "Java_02": {question : "Which is a valid keyword in java?",
                              options: ["interface","string","Float","unsigned"],
                              //answer : "interface",
                              test_name: "java" },
                  "Java_03": {question : "Which is the valid declarations within an interface definition?",
                              options: ["public double methoda();","public final double methoda();","static void methoda(double d1);","protected void methoda(double d1);"],
                              //answer : "public double methoda();",
                              test_name: "java" }
                            } );
    }else if( req.body.test === 'python'){
        res.json( {"Python_01" : {question : "Which is a reserved word in the Python programming language?",
                                  options: ["method","native","subclasses","reference"],
                                  //answer : "native",
                                  test_name: "Python" },
                   "Python_02" : {question : "Which is a valid keyword in Python?",
                                  options: ["interface","string","Float","unsigned"],
                                  //answer : "interface",
                                  test_name: "Python" },
                  "Python_03" : {question : "Which is the valid declarations within an interface definition?",
                                  options: ["public double methoda();","public final double methoda();","static void methoda(double d1);","protected void methoda(double d1);"],
                                  //answer : "public double methoda();",
                                  test_name: "Python" },
                  "Python_04" : {question : "What are the method(s) that iterator object must implement?",
                                  options: ["__iter__()","iter__()","__iter()","iter()"],
                                 //answer : "public double methoda();",
                                  test_name: "Python" }
    })
    }
});

app.post('/check_answer',(req,res) => {
  if( (req.body.question_id === 'Java_01' && req.body.answer === 'native') || (req.body.question_id === 'Java_02' && req.body.answer === 'interface') || (req.body.question_id === 'Java_03' && req.body.answer === 'public double methoda();')){
    res.send({
        question_id : req.body.question_id,
        correct : true
    })
  }else{
    res.send({
        question_id : req.body.question_id,
        correct : false
    })
  }
})

app.listen(port);
console.log('server started at ',port);
