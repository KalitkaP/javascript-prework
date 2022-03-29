
  let playerScore = 0;
  let gameScore = 0;

      function buttonClicked(argButtonName) {
        clearMessages();
        

        function getMoveName(argMoveId) {
          if (argMoveId == "1") {
            return "kamień";
          } else if (argMoveId == "2") {
            return "papier";
          } else if (argMoveId == "3") {
            return "nożyce";
          }
        }
        

        function resultDisplay(argPlayerMove, argComputerMove) {
         
          if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
            playerScore++;
            console.log(playerScore)
            printMessage("Wygrywasz");
            valuePlayer.textContent=playerScore;
            
          } else if (argPlayerMove == "papier" && argComputerMove == "kamień"){
            playerScore++;
            printMessage("Wygrywasz");
            valuePlayer.textContent=playerScore;
           
          } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
            playerScore++;
            printMessage("Wygrywasz");
            valuePlayer.textContent=playerScore;
            
          } else if (argPlayerMove == argComputerMove) {
            printMessage("Remis");
          } else {
            gameScore++;
            printMessage("Przegrywasz");
            valueComputer.textContent=gameScore;
          }
        }
      

        const playerMove = argButtonName;
        printMessage("Gracz wybrał " + argButtonName);
        console.log("Gracz wybrał " + argButtonName);

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        console.log("Komputer wybrał: " + computerMove);
        printMessage("Komputer wybrał: " + computerMove);
        resultDisplay(playerMove, computerMove);
      
      }


      const btnRock = document.getElementById("rock");
      const btnPaper = document.getElementById("paper");
      const btnScissors = document.getElementById("scissors");
      const btnStart = document.getElementById("start");
      const valuePlayer = document.getElementById("player-score");
      const valueComputer = document.getElementById("computer-score");

      btnRock.addEventListener("click", function () {
        buttonClicked("kamień");
      });
      btnPaper.addEventListener("click", function () {
        buttonClicked("papier");
      });
      btnScissors.addEventListener("click", function () {
        buttonClicked("nożyce");
      });
      btnStart.addEventListener("click", function () {
        location.reload();
      });