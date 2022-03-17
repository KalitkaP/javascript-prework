var playerMove, playerInput;

playerInput = prompt(
  "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
);

if (playerInput == "1") {
    playerMove = "kamień";
    console.log('Twój ruch: ' + playerMove);
  }
else if (playerInput == "2") {
    playerMove = "papier";
    console.log('Twój ruch: ' + playerMove);
  }
else if (playerInput == "3") {
    playerMove = "nożyce";
    console.log('Twój ruch: ' + playerMove);
} else {
    playerMove = "nieznany ruch";
    console.log('Nie ma takiej opcji')
    }

  printMessage('Gracz wybrał - ' + playerMove);

   
   var computerMove, randomNumber;

      randomNumber = Math.floor(Math.random() * 3 + 1);
      
      if (randomNumber == "1") {
        computerMove = "kamień";
        console.log("Komputer wybrał: " + computerMove);
      }
      else if (randomNumber == "2") {
        computerMove = "papier";
        console.log("Komputer wybrał: " + computerMove);
      }
      else if (randomNumber == "3") {
        computerMove = "nożyce";
        console.log("Komputer wybrał - " + computerMove);
      }
      printMessage('Komputer wybrał - ' + computerMove);
    
       


    
    if ( playerMove == 'kamień' && computerMove == 'papier') {
        console.log('Komputer wygrywa');
    }
    else if (playerMove == 'papier' &&  computerMove == 'nożyce') {
        console.log('Komputer wygrywa');
    }
    else if (playerMove == 'nożyce' &&  computerMove == 'kamień') {
        console.log('Komputer wygrywa');
    }
    else if (playerMove == computerMove ) {
        console.log('Remis'); 
    }
    else if (playerMove == "nieznany ruch" ) {
        console.log('Nie ma takiej opcji'); 
    }
   
    else {
        console.log('Gracz wygrywa');
    }