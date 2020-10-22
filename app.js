
const problemBlank = document.querySelector('form'); 

problemBlank.addEventListener('submit', (event) =>{
    event.preventDefault(); 

    const formData = new FormData(problemBlank); 
    const problem = formData.get('problem'); 
    const solution = formData.get('solution'); 

    const sendProblem = {
        problem
    };
    const sendSolution = {
        solution
    }; 

    problemBlank.reset(); 

    const API_URL = 'http://localhost:8888/problem'; 

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(sendProblem),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
      .then(problemWritten =>{
            console.log(problemWritten.code);
            document.getElementById("main").innerHTML = problemWritten.code; 
      }); 

        const API_URLS = 'http://localhost:8888/solution'; 
      fetch(API_URLS, {
          method: 'POST',
          body: JSON.stringify(sendSolution), 
          headers:{
              'content-type': 'application/json'
          }
      }).then(response => response.json())
        .then(solutionWritten =>{
            console.log(solutionWritten.code); 
            document.getElementById("sol").innerHTML = solutionWritten.code; 
        }); 
}); 