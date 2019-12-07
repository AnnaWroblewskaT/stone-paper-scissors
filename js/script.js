var paperButton = document.getElementById('paper');
var stoneButton = document.getElementById('stone');
var scissorsButton = document.getElementById('scissors');
var newGame = document.getElementById('newGame');
var controls = document.getElementById('controls');

var output = document.getElementById('output');
var result = document.getElementById('result');
var end = document.getElementById('end');

var computerPoints = 0;
var playerPoints = 0;
var roundCount;

newGame.addEventListener('click', function() {
  roundCount = prompt("Podaj liczbę rund w grze: "); 
  controls.classList.remove('hide');
  computerPoints = 0;
  playerPoints = 0;
  output.innerText = "";
  result.innerText = "";
  end.innerText = "";
  rounds.innerText = 'Liczba rund potrzebnych do wygranej to: ' + roundCount;
});


paperButton.addEventListener('click', function() {
  playerMove('paper'); //dlaczego nie playerMove = "paper"?
});

stoneButton.addEventListener('click', function() {
  playerMove('stone');
});

scissorsButton.addEventListener('click', function() {
  playerMove('scissors');
});

function getComputerMove() {
  var moveNames = ['paper', 'stone', 'scissors'];
  return moveNames[Math.floor(Math.random() * 3)];
}

function playerMove(moveType) {
  var computerMove = getComputerMove();
  
  if(moveType === computerMove) {
    output.innerText = 'remis';
  } else {
    if(
      moveType === 'paper' && computerMove === 'stone' ||
      moveType === 'stone' && computerMove === 'scissors' ||
      moveType === 'scissors' && computerMove === 'paper'  
    ) {
      output.innerText = 'Wygrales! Zagrałeś ' + moveType + ' a komputer zagrał ' + computerMove;
      playerPoints++;
      result.innerText = 'Punkty gracza: ' + playerPoints + ' - punkty komputera: ' + computerPoints;
    } else {
      output.innerText = 'przegrales! Zagrałeś ' + moveType + ' a komputer zagrał ' + computerMove;
      computerPoints++;
      result.innerText = 'Punkty gracza: ' + playerPoints + ' - punkty         komputera: ' + computerPoints;
      //console.log(playerPoints + ' - ' + computerPoints);
    }

  }
      if(playerPoints == roundCount) {
      end.innerText = 'Jako pierwszy zdobyłeś ' + roundCount + ' punktów. Wygrałeś grę!';
     //var off = document.getElementByClassName("off");
  //off.disabled=true;
    }
    else if(computerPoints == roundCount) {
      end.innerText = 'Komputer jako pierwszy zdobył ' + roundCount + ' punktów. Przegrałeś grę!';
      //var off = document.getElementByClassName("off");
  //off.disabled=true;
    }
}