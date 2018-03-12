var RandomTotal = "";
var totalScore = 0;
var wins = 0;
var lossess = 0;
var crystal1 = "";
var crystal2 = "";
var crystal3 = "";
var crystal4 = "";


function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min) + min);

};



$("CurrentScore").innerHTML = totalScore;

function game() {

    if (totalScore === RandomTotal) {
        wins++;
        alert('You win');
        $('#winner').html(wins);
        newGame();
    } else if (totalScore > RandomTotal) {
        lossess++;
        alert("you Lose");
        $('#loser').html(lossess);
        newGame();

    }
};

function newGame() {

    RandomTotal = getRandom(19, 120);
    crystal1 = getRandom(1, 12);
    crystal2 = getRandom(1, 12);
    crystal3 = getRandom(1, 12);
    crystal4 = getRandom(1, 12);
    totalScore = 0;

    $('#TotalRandom').html(RandomTotal);

    $('#CurrentScore').html(totalScore);

};

newGame();


$('#crystal111').on('click', function () {


    crystal1 = getRandom(1, 12);
    totalScore = crystal1 + totalScore;
    $("#CurrentScore").html(totalScore);
    game();
    console.log(crystal1);
    console.log(totalScore);


});

$('#crystal222').on('click', function () {

    crystal2 = getRandom(1, 12);
    totalScore = crystal2 + totalScore;
    $('#CurrentScore').html(totalScore);
    game();
    console.log(crystal2);
    console.log(totalScore);

});

$('#crystal333').on('click', function () {

    crystal3 = getRandom(1, 12);
    totalScore = crystal3 + totalScore;
    $('#CurrentScore').html(totalScore);
    game();
    console.log(crystal3);
    console.log(totalScore);

});

$('#crystal444').on('click', function () {

    crystal4 = getRandom(1, 12);
    totalScore = crystal4 + totalScore;
    $('#CurrentScore').html(totalScore);
    game();
    console.log(crystal4);
    console.log(totalScore);

});