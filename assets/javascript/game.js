var objective;
var userScore;
var gemValue;
var win = 0;
var loss = 0;

function reset(){
    $("#targetScore").html(Math.floor(Math.random()*102)+19);
    objective = parseInt($("#targetScore").html());
    $("#currentScore").html(0);
    $("#redGem").val(Math.ceil(Math.random()*12));
    $("#blueGem").val(Math.ceil(Math.random()*12));
    $("#yellowGem").val(Math.ceil(Math.random()*12));
    $("#greenGem").val(Math.ceil(Math.random()*12));
    userScore = 0;
}

$(document).ready(function() {

    reset();

    $(".gem").on("click", function(){
        gemValue = parseInt($(this).val());
        userScore = userScore + gemValue;
        $("#currentScore").html(userScore);

        if(userScore > objective){
            loss++;
            $("#losses").html(loss);
            $("#message").html("You lost!!");
            reset();
        }else if(userScore === objective){
            win++;
            $("#wins").html(win);
            $("#message").html("You won!!");
            reset();
        }else{
            $("#message").html("");
        }

    });

});