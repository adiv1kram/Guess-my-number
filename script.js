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
        document.querySelector('body').style.backgroundColor='#60b347';
    }
    else if(guess<SecretNumber){
        if(score>0){document.querySelector('.message').textContent="Number is too low!";
        score--;
        document.querySelector('.score').textContent=score;}
        else{
            document.querySelector(".message").textContent="You lost the game";
        }
        
    }
    else if(guess>SecretNumber){
        if(score>0){
            document.querySelector('.message').textContent="Number is too high!";
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector(".message").textContent="You lost the game";
        }
    }
    
});
document.querySelector9('.again').addEventListener('click',function(){
     document.querySelector('body').style.backgroundColor='#222';
     document.querySelevtor('.message').textContent='start guesssing...';
     document.querySelector('.score').textContent=score;
}
)
