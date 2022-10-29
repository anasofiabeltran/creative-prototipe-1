//url base
//let BASE = "https://infinite-cove-11379.herokuapp.com/api/"
//let BASE = "http://localhost:3001/api";
let BASE = "https://creativebackend.herokuapp.com/";


function createUser(user,url){
    fetch(BASE + url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(user), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
    
        .then(response => console.log('Success:', response));
}

function getEstudents(){
fetch(BASE + '/estudiantes').
    then(data => data.json()).
    then(res => {
        console.log(res);
        alert(res);
    });
}

function addGameQuestion(question,url){
    fetch(BASE + url, {
        method: 'PUT',
        body: JSON.stringify(question), 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
    
        .then(response => console.log('Success:', response));
}


function getGame(game,url){
    fetch(BASE + url, {
        method: 'POST',
        body: JSON.stringify(game), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

export {createUser,getEstudents,addGameQuestion,getGame};