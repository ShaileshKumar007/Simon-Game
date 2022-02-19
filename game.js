var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// starting the game
$(document).keydown(function(){
    if(!started){
        started = true;
        $("#level-title").text("Level "+level);
        nextSequence();
    }
})

// Checking which button that user clicked 
$(".btn").click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
    
})

// function for playing sound
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// animation for the buttons
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {
        // $("#"+currentColour).removeClass("pressed");
        document.getElementsByClassName(currentColour)[0].classList.remove("pressed");
    }, 100);
}

// to get next sequence
function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
  
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    playSound(randomChosenColour);
  }

  