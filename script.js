'use strict';
const SecretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
document.querySelector('.check').addEventListener('click',function(){
    console.log(document.querySelector('.guess').value);
    //document.querySelector('.message').textContent="congratulations! Correct Answer"
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess); 
    if(!guess){
        document.querySelector('.message').textContent="No Number";
        
    }
    else if(guess===SecretNumber){
        document.querySelector('.message').textContent="congratulations! Correct Answer";  
        document.querySelector('.number').textContent=SecretNumber;
        score+=10;
        document.querySelector('.score').textContent=score;
    }
    else if(guess<SecretNumber){
        document.querySelector('.message').textContent="Number is too low!";
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess>SecretNumber){
        document.querySelector('.message').textContent="Number is too high!";
        score--;
        document.querySelector('.score').textContent=score;
    }
    
});

