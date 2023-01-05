function highscores() {
    // Go get scores from localstorage or set to empty array
    var scores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
    // sort scores by score property in descending order
    scores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (var i = 0; i < highscores.length; i += 1) {
      // create li tag for each high score
      var liTag = document.createElement('li');
      liTag.textContent = scores[i].initials + ' - ' + scores[i].score;
  
      // display on page
      var olScore = document.getElementById('highscores');
      olScore.appendChild(liTag);
    }
  }
  
  function clearScores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  }
  
  document.getElementById('clear').onclick = clearScores;
  
  // run function when page loads
  printScores();