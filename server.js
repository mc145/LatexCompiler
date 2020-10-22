const katex = require('katex'); 
const express = require('express'); 
const cors = require('cors'); 

const app = express(); 

app.use(cors()); 
app.use(express.json()); 
app.get('/', (req, res) =>{
    res.json({
     message: "HElllo kdldfjdk"
    });
 }); 
app.post('/problem', (req, res) =>{

  //  console.log("BODY IS "); 
   // console.log(req.body.problem.toString());
   let htmls = katex.renderToString(`${req.body.problem.toString()}`, {
        throwOnError: false,
        output: 'html'
   }); 
   
   
   let stringtoEnter = {
       'code': htmls
   }; 
   res.json(stringtoEnter); 
   console.log(stringtoEnter );
}); 


app.post('/solution', (req, res) =>{
    let htmlss = katex.renderToString(`${req.body.solution.toString()}`, {
        throwOnError: false,
        output: 'html'
    }); 
    let solutionToEnter = {
        'code': htmlss
    }; 
    res.json(solutionToEnter); 
    console.log(solutionToEnter); 
}); 
app.listen(8888, () =>{
    console.log('Listening on http://localhost:8888'); 
});

