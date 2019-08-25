/* 
***To Do List**
- get the press a button to start feature working
- after popup window with video happens, change the page in the background to the next puzzle
    - do this by calling a function? How?
- organize code into functions
- add better game over graphics
*/
$(document).ready(function() {
// Create an array of the alphabet
    var alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var lettersGuessed;
    var remainingGuesses;
    // Create an array of song titles and randomly select them when the game is played
    var songs = [
        {
            name: "White And Nerdy",
            url: "https://youtu.be/GWc6QQ9JlMc",
            inPlay: true
        },
        {
            name: "Like A Surgeon",
            url: "https://youtu.be/notKtAgfwDA",
            inPlay: true
        },
        {
            name: "Dare To Be Stupid",
            url: "https://youtu.be/SMhwddNQSWQ",
            inPlay: true
        },
        {
            name: "Living With A Hernia",
            url: "https://youtu.be/SMhwddNQSWQ",
            inPlay: true
        },
        {
            name: "It's All About The Pentiums",
            url: "https://youtu.be/qpMvS1Q1sos",
            inPlay: true
        }
    ]

    // Choose a random song from the array
    var songChoice;
    var answer;
    var wins = 0;

    // Create an empty string as a placeholder
    var question;
    var gameStarted = false;
    // Iterate through the song selected and add an underscore and a space if there is a letter and two spaces if there is just a space


    document.onkeydown = function(event) {
        if(gameStarted){
            if(!(remainingGuesses === 0)){

                // Determines which key was pressed.
                var userGuess = event.key;
                // console.log(userGuess)
                // console.log(answer.includes(userGuess))
                
                lettersGuessed.push(userGuess);
                if(!answer.includes(userGuess)){
                    remainingGuesses--;
                    $("#remainingGuesses").html(remainingGuesses);
                    $("#lettersGuessed").html(lettersGuessed.join(","));
                    if(remainingGuesses === 0){
                        $("#currentWordLabel").html("<h1>Game Over</h1>")
                    }
                    // console.log("Remaining guesses " + remainingGuesses);
                    // console.log("Letters guessed " + lettersGuessed.join(","));
                } else {
                    $("#lettersGuessed").html(lettersGuessed.join(","));
                }
                for(var i = 0; i < answer.length; i++){
                    if(answer[i] === userGuess){
                        console.log("Question var " + question[i])
                        console.log("User Guess " + userGuess)
                        question[i] = userGuess;
                        $("#currentWord").html(question);
                    }
                }
                console.log(question.join(""))

                if(question.join("") == answer.toLowerCase()){
                    songChoice.inPlay = false;
                    console.log(songChoice);
                    window.open(songChoice.url,'popUpWindow','height=700,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
                    wins++;
                    $("#winCount").html(wins);
                    startGame();
                }
            }
        } else{
            gameStarted = true;
            $(".mainHead").replaceWith("<img style='height: 50%' id='headerTitle' src='assets/images/weirdAlHeader.png' alt=''>")
            startGame();
        };
    };

        function startGame(){
            songChoice = songs[Math.floor(Math.random() * songs.length)];
            //trying to prevent a song from being chosen if it was played already but not able to make this work
            if(songChoice.inPlay != false){
                answer = songChoice["name"].toLowerCase(); 
            } else {
                songChoice = songs[Math.floor(Math.random() * songs.length)];
            }
            question = [];
            lettersGuessed = [];
            remainingGuesses = 3;
            $("#lettersGuessed").html(lettersGuessed);
            $("#remainingGuesses").html(remainingGuesses);
            for(i = 0; i < answer.length; i++){
                if(answer[i] === " "){
                    question.push(" ");
                } else {
                question.push("_");
                }
            }
            console.log(songChoice)
            console.log(question);
            $("#currentWord").html(question);
        }

});
