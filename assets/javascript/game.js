$(document).ready(function () {

    var userPoints = 0;
    var win = 0;
    var losses = 0;
    var targetNumber = Math.floor(Math.random() * 99 + 25);

    $(".numMatch").text(targetNumber);

    var jew1Val = Math.floor(Math.random() * 10 + 1);
    var jew2Val = Math.floor(Math.random() * 10 + 1);
    var jew3Val = Math.floor(Math.random() * 10 + 1);
    var jew4Val = Math.floor(Math.random() * 10 + 1);

    $("#jew1").on("click", function() {
        userPoints += jew1Val;
        console.log(userPoints);
        $(".points").text(userPoints);
        winnerLoser();
    });

    $("#jew2").on("click", function() {
        userPoints += jew2Val;
        console.log(userPoints);
        $(".points").text(userPoints);
        winnerLoser();
    });
    
    $("#jew3").on("click", function() {
        userPoints += jew3Val;
        console.log(userPoints);
        $(".points").text(userPoints);
        winnerLoser();     
    });

    $("#jew4").on("click", function() {
        userPoints += jew4Val;
        console.log(userPoints);
        $(".points").text(userPoints);
        winnerLoser();
    });

    function winnerLoser() {
    if ( userPoints === targetNumber) {
        alert("Wiiner Winner Chicken Dinner! Your score: " + userPoints);
        win++;
        $(".win").html("Wins: " + win);
        reset();
    }
    else if (userPoints >= targetNumber) {
    alert("Sorry you been beaten! Your score: " + userPoints);
        losses++;
        $(".losses").html("Losses: " + losses);
        reset();
    }
    }

    function reset() {
        userPoints = 0;
        targetNumber = Math.floor(Math.random() * 99 + 25);
        $(".numMatch").text(targetNumber);
        jew1Val = Math.floor(Math.random() * 10 + 1);
        jew2Val = Math.floor(Math.random() * 10 + 1);
        jew3Val = Math.floor(Math.random() * 10 + 1);
        jew4Val = Math.floor(Math.random() * 10 + 1);
    }
});


// var crystalImg = ["assets/images/amethyst.jpg", "assets/images/clestine.jpg", "assets/images/desert-rose.png", "assets/images/fire-and-ice.jpg"];
// var value;
// var usersPoints;
// var win = 0;
// var losses = 0;
// var targetNumber = Math.floor(Math.random() * 99) + 25;
// var value = Math.floor(Math.random() * 25) + 1;

// $(".numMatch").text(targetNumber);



// for (var i = 0; i < crystalImg.length; i++) {
//     var crystalDiv = $("<img>");
//     crystalDiv.attr("src", crystalImg[i]);
//     crystalDiv.attr("data-crystal", value);
//     crystalDiv.addClass("crystal-image");
//     $("#crystalPosition").append(crystalDiv);
// };

// $(".crystalPosition").on("click", function() {
//     var crystalValue = ($(this).attr("data-crystal"));
//     crystalValue = parseInt(crystalValue);
//     usersPoints += crystalValue;

//     if (counter === targetNumber) {
//         alert("You win!");
//         win++;
//         $(".win").text(win);
//     }
//     else if (counter >= targetNumber) {
//         alert("You lose!!");
//         losses++;
//         $(".losses").text(losses);
//     }

//     $(".points").text(userPoints);
// });

