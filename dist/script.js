window.addEventListener("load", () => {
  let playerPoints = 0;
  let computerPoints = 0;
  
  function random(min = 0, max = 2) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
    function getHandIco(handId) {
    switch(handId) {
      case 0:
        result = '<i class="far fa-hand-rock little-hand"></i>';
        break;
      case 1:
        result = '<i class="far fa-hand-paper little-hand"></i>';
        break;
      case 2:
        result = '<i class="far fa-hand-scissors little-hand"></i>';
        break;
      default:
        result = '<i class="far fa-question-circle"></i>';
        break;
    }

    return result;
  }
  
  function getResult(game) {
      switch(game) {
        case 'd':
          result = "It's a Tie!";
          break;
        case 'l':
          result = "You Lose :(";
          computerPoints++;
          break;
        case 'w':
          result = "You Won :)";
          playerPoints++;
          break;
        default:
          result = "Unknown!";
          break;
      }

      return result;
  }

  function getHand(handId) {
    switch(handId) {
      case 0:
        result = "Rock";
        break;
      case 1:
        result = "Paper";
        break;
      case 2:
        result = "Scissors";
        break;
      default:
        result = "Unknown";
        break;
    }

    return result;
  }
  
  function play(playerHand, computerHand) {
    var playerHand = parseInt(playerHand);
    var resultMap = [
      ['d', 'l', 'w'],
      ['w', 'd', 'l'],
      ['l', 'w', 'd'],
    ];
    
    document.getElementsByClassName("result-title")[0].innerText = getResult(resultMap[playerHand][computerHand]);
    
    var result = "<div class='result'>" + getHandIco(playerHand) + " VS " + getHandIco(computerHand) + "</div>";
    
    document.getElementsByClassName("results")[0].innerHTML = result;
    
    document.getElementById("player").innerText = playerPoints;
    document.getElementById("computer").innerText = computerPoints;
  }
  
  var moves = document.getElementsByClassName("hand");

  for(var i = 0; i < moves.length; i++) {
    moves[i].addEventListener("click", function() {
      play(this.id, random());
    });
  }
});