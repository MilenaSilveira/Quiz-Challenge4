// Function to get and display scores
function showScores () {
var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
//separate scores

highscores.sort(function (a, b){
    return b.score - a.score;
})


for (var i = 0; i < highscores.lenght; i += 1){
    var liEl = document.createElement('li');
    liEl.textContent = highscores[i].initials + '-' + highscores[i].score;

    //show on html

    var olList = document.getElementById("highscores");
    olList.appendChild(liEl);
}
}

//Erase scores

function eraseHighscores(){
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("erase").onclick = eraseHighscores;

showScores();
