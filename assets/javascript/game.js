// Create an array of the alphabet
var alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
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

var songChoice = songs[Math.floor(Math.random() * songs.length)];

var question = ""
for(i = 0; i < songChoice["name"].length; i++){
    if(songChoice[i] === " "){
        songChoice += " ";
    } else {
    question += ["_ "];
    }
}
// Display the song title in a series of underscores
// Prompt the user for a letter to enter and check their entry vs the current song
// If correct the user gets to go again
// If incorrect user gets a chance removed
// If user runs out of chances the game ends
// If user is correct, a window pops up and a youtube video of the song plays