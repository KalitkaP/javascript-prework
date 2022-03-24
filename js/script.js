

      const btnRock = document.getElementById("rock");
      const btnPaper = document.getElementById("paper");
      const btnScissors = document.getElementById("scissors");
      const btnStart = document.getElementById("start");

      var argComputerMove,
        argPlayerMove,
        computerMove,
        randomNumber,
        playerMove,
        playerInput,
        getMove;

      function buttonClicked(argButtonName) {
        clearMessages();
        

        function value(getMove) {
          if (getMove == "1") {
            return "kamień";
          } else if (getMove == "2") {
            return "papier";
          } else if (getMove == "3") {
            return "nożyce";
          }
        }
        

        function resultDisplay(argPlayerMove, argComputerMove) {
         
          if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
            return "Wygrywasz";
            
          } else if (argPlayerMove == "papier" && argComputerMove == "kamień"){
            return "Wygrywasz";
           
          } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
            return "Wygrywasz";
            
          } else if (argPlayerMove == argComputerMove) {
            return "Remis";
          } else {
            return "Przegrywasz";
           
          }
        }

        playerMove = argButtonName;
        printMessage("Gracz wybrał " + argButtonName);
        console.log("Gracz wybrał " + argButtonName);
        randomNumber = Math.floor(Math.random() * 3 + 1);
        computerMove = value(randomNumber);
        console.log("Komputer wybrał: " + computerMove);
        printMessage("Komputer wybrał: " + computerMove);
        var result= resultDisplay(playerMove, computerMove);
        console.log(result);
        printMessage(result);
      
      }

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