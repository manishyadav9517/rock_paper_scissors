let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];

  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
//   console.log("game was draw");
  msg.innerText="Game is Draw! Play Again";
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    // console.log("You Win");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText="You Win!";
  } else {
    compScore++;
    compScorePara.innerText=compScore;
    // console.log("You lose");
    msg.innerText="You Lose!";
  }
};
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("copm choice= ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",userChoice);
    playGame(userChoice);
  });
});
