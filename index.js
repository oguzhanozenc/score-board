let homeScore = document.getElementById("homescore") ;
let guestScore = document.getElementById("guestscore") ;

let scoreHome = 0;
let scoreGuest = 0;

let winnerText = document.getElementById("winnertext")

function homePlusOne(){
    scoreHome +=1;
    homeScore.textContent = scoreHome; 
}

function homePlusTwo(){
    scoreHome +=2;
    homeScore.textContent = scoreHome; 
}

function homePlusThree(){
    scoreHome +=3;
    homeScore.textContent = scoreHome; 
}


function guestPlusOne(){
    scoreGuest +=1;
    guestScore.textContent = scoreGuest; 
}

function guestPlusTwo(){
    scoreGuest +=2;
    guestScore.textContent = scoreGuest; 
}

function guestPlusThree(){
    scoreGuest +=3;
    guestScore.textContent = scoreGuest; 
}

function finishGame() {
      scoreHome=  scoreHome;
       scoreGuest = scoreGuest;
         guestScore.scoreGuest = scoreGuest;
          homeScore.textContent = scoreHome;
            winnerText.textContent = "Congrats!"
}

function newGame() {
    scoreHome = 0;
    scoreGuest = 0;
    guestScore.textContent = 0; 
    homeScore.textContent = 0;
}


