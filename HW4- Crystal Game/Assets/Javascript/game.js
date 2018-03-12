//Computer"s computerGuess number
$(document).ready(function () {

    var computerGuess = [Math.floor((Math.random() * 120) + 19)];

    $("#computerGuess").text(computerGuess);

    //Gem computerGuess numbers
    var bGem = [Math.floor(Math.random() * 12) + 1];
    var yGem = [Math.floor(Math.random() * 12) + 1];
    var pGem = [Math.floor(Math.random() * 12) + 1];
    var gGem = [Math.floor(Math.random() * 12) + 1];

    //Tracks wins/losses/score

    var wins = 0;
    var losses = 0;
    var total_score = 0;
    var computerGuess = 0;

    $("numberWins").text(wins);
    $("numberLosses").text(losses);

    //Game Reset (Computer Guess & Gems)
    function reset() {
        computerGuess = [Math.floor(Math.random() * 120) + 19];
        console.log(computerGuess);
        $("#computerGuess").text(computerGuess);


        bGem = [Math.floor(Math.random() * 12) + 1];
        yGem = [Math.floor(Math.random() * 12) + 1];
        pGem = [Math.floor(Math.random() * 12) + 1];
        gGem = [Math.floor(Math.random() * 12) + 1];
        total_score = 0;
        $("#total_score").text(total_score);
    }

    $("#bGem").val(bGem)
    console.log($("#bGem").val);

    //Generates random computer #'s between 19-120 & random button #'s 1-12
    var computerGuess = [Math.floor(Math.random() * 120) + 19];
    var bGem = [Math.floor(Math.random() * 12) + 1];
    var yGem = [Math.floor(Math.random() * 12) + 1];
    var pGem = [Math.floor(Math.random() * 12) + 1];
    var gGem = [Math.floor(Math.random() * 12) + 1];

    //Track which wins/losses/total score
    $("#wins").text(wins)
    $("#losses").text(losses)
    $("#total_score").text(total_score)
    $("#computerGuess").text(computerGuess)
  

    function gameUpdate() {
        $("#wins").text(wins)
        $("#losses").text(losses)
        $("#total_score").text(total_score)
        $("#computerGuess").text(computerGuess)
        reset()
    }

    //Tracks Wins/Losses


    //Assign values to Gems

    // $("body").on("click",)

    $("#bGem").on("click", function () {
        total_score = parseInt(total_score) + parseInt(bGem);
        console.log("Your score = " + total_score);
        $("#total_score").text(total_score);
        //sets win/lose conditions
        if (total_score == computerGuess) {
            alert("User Wins!");
            wins++;
            gameUpdate();
        }
        else if (total_score > computerGuess) {
            alert("User Loses!");
            losses++;
            gameUpdate();
        }
    })
    $("#yGem").on("click", function () {
        total_score = parseInt(total_score) + parseInt(yGem);
        console.log("Your score = " + total_score);
        $("#total_score").text(total_score);
        if (total_score == computerGuess) {
            alert("User Wins!");
            wins++;
            gameUpdate();
        }
        else if (total_score > computerGuess) {
            alert("User Loses!");
            losses++;
            gameUpdate();
        }
    })
    $("#pGem").on("click", function () {
        total_score = parseInt(total_score) + parseInt(pGem);
        console.log("Your score = " + total_score);
        $("#total_score").text(total_score);
        //sets win/lose conditions
        if (total_score == computerGuess) {
            alert("User Wins!");
            wins++;
            gameUpdate();
        }
        else if (total_score > computerGuess) {
            alert("User Loses!");
            losses++;
            gameUpdate();
        }
    })
    $("#gGem").on("click", function () {
        total_score = parseInt(total_score) + parseInt(gGem);
        console.log("Your score = " + total_score);
        $("#total_score").text(total_score);

        if (total_score == computerGuess) {
            alert("User Wins!");
            wins++;
            gameUpdate();
        }
        else if (total_score > computerGuess) {
            alert("User Loses!");
            losses++;
            gameUpdate();
        }
    });

})


