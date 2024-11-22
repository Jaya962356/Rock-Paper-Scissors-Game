let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msgPara.innerText="The game was a tie";
    msgPara.style.backgroundColor="#000099";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you won!");
        msgPara.innerText=`Awesome,you won! Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        msgPara.innerText=`You lost, try again next time! ${compChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor="red";
    }
}

const playGame= (userChoice) =>{
    console.log('user choice =', userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log('comp choice=',compChoice);

    if(userChoice===compChoice){
       drawGame();
    } else {
        let userWin=true;
        if (userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false : true;
        }else{
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);   
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
    });
});
