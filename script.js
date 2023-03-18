/* if u want to run the code in VS-CODE then please uncomment the below 
prompt because the prompt is not defined inside vs code*/

// let prompt = require("prompt-sync")();

function OpeningCeremony(scores, callbackFnct) {
  console.log("Let the games begins");

  let score = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
  };

  setTimeout(() => {
    console.log("Opening Ceremony Completed!");
    Race100M(score, callbackFnct);
  }, 1000);
}

function Race100M(score, callbackFnct) {
  console.log("Race 100M Started!!");

  /* to generate random numbers between (10 -15)-->{6 numbers} 
    used random function and to round off to int used math.floor
 */
  let times = {
    red: Math.floor(Math.random() * 6) + 10,
    blue: Math.floor(Math.random() * 6) + 10,
    green: Math.floor(Math.random() * 6) + 10,
    yellow: Math.floor(Math.random() * 6) + 10,
  };

  console.log(times);

  let sortedColors = Object.keys(times).sort(function (a, b) {
    return times[a] - times[b];
  });
  score[sortedColors[0]] += 50;
  console.log(
    sortedColors[0] + " has secured the first position and scored 50 points"
  );
  score[sortedColors[1]] += 25;
  console.log(
    sortedColors[1] + " has secured the second position and scored 25 points"
  );
  console.log("Updated Score: ", score);
  console.log("Race 100M Completed!");
  setTimeout(() => {
    LongJump(score, callbackFnct);
  }, 3000);
}

function LongJump(score, callbackFnct) {
  console.log("Long Jump started!!");
  let color = Object.keys(score)[Math.floor(Math.random() * 4)];
  console.log(color, "won the Long Jump.");
  score[color] += 150;
  console.log("Updated Scores:", score);

  console.log("Long Jump Ended!!");
  setTimeout(() => {
    HighJump(score, callbackFnct);
  }, 2000);
}

function HighJump(score, callbackFnct) {
  console.log("High Jump Started!!");

  let color = prompt("What colour secured the highest jump?");
  if (color && score.hasOwnProperty(color)) {
    console.log(color, "wons the High Jump!");
    score[color] += 100;
  } else {
    console.log("Event was cancelled.");
  }
  console.log("Updated Score :", score);
  console.log("High Jump Ended!!");
  AwardCeremony(score);
}

function AwardCeremony(score) {
  console.log("Award Ceremony Started!!");
  let sortedScores = Object.keys(score).sort(function (a, b) {
    return score[b] - score[a];
  });
  console.log(
    `${sortedScores[0]} came first with ${score[sortedScores[0]]} points.`
  );
  console.log(
    `${sortedScores[1]} came second with ${score[sortedScores[1]]} points.`
  );
  console.log(
    `${sortedScores[2]} came third with ${score[sortedScores[2]]} points.`
  );
  console.log(
    `${sortedScores[3]} came fourth with ${score[sortedScores[3]]} points.`
  );
  console.log("Award Ceremony Ended!!");
}

OpeningCeremony(function (score) {
  Race100M(score, function (score) {
    LongJump(score, function (score) {
      HighJump(score, function (score) {
        AwardCeremony(score);
      });
    });
  });
});
