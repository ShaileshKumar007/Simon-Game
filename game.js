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
