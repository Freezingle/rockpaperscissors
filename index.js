const playerText= document.querySelector("#playerText");
const computerText= document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns= document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

//this means foreach button in choiceBtns check for the event click and then run that arrow function!!

choiceBtns.forEach(button=> button.addEventListener("click",()=>{
      player= button.textContent;
      computerTurn();
      playerText.textContent= `Player:${player}`;
      computerText.textContent = `Computer:${computer}`;
      resultText.textContent = checkwin();
}));

function computerTurn()
{
    const randNum = Math.floor(Math.random()*3)+1;
    switch (randNum)
    {
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS";
            break;
        
    }
}

function checkwin()
{
    if(player==computer)
    {
       return "Draw";
    }
    else if(computer=="ROCK")
    {
        return (player=="PAPER")? "YOU WIN": "YOU LOSE";
    }
    else if(computer="PAPER")
    {
        return (player="SCISSORS")? "YOU WIN": "YOU LOSE";
    }
    else if(computer="SCISSORS")
    {
        return (player="ROCK")? "YOU WIN": "YOU LOSE";
    }
}