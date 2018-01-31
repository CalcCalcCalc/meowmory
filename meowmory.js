$(document).ready(function(){
    var gridSize = "3,2";
    var xyarr = gridSize.split(','); // split the co-ords
    var x = xyarr[0]; // co-ord 1 is x
    var y = xyarr[1]; // co-ord 2 is y
    makeGrid(x, y);
    var total = $(".card-memory").length;
    var score = 100;
    var clickCount = 0;
    CardClick(); // initialise click logic
    $(".wrapper").css("grid-template-columns", "repeat("+ x +", auto)");
    $(".wrapper").css("grid-auto-rows", 100 / (y*2) + "rem");


    $("#difficulty").change(function(){
        gridSize = $(this).val();
        var xyarr = gridSize.split(','); // split the co-ords
        var x = xyarr[0]; // co-ord 1 is x
        var y = xyarr[1]; // co-ord 2 is y
        makeGrid(x, y);
        total = $(".card-memory").length;
        score = 100;
        clickCount = 0;
        debug(2, "new game");
        CardClick(); // reinitialise click logic
        $(".wrapper").css("grid-template-columns", "repeat("+ x +", auto)");
        $(".wrapper").css("grid-auto-rows", 100 / (y*2) + "rem");
    });

    $("#reset").click(function(){
        xyarr = gridSize.split(','); // split the co-ords
        x = xyarr[0]; // co-ord 1 is x
        y = xyarr[1]; // co-ord 2 is y
        makeGrid(x, y);
        total = $(".card-memory").length;
        score = 100;
        clickCount = 0;
        debug(2, "new game");
        CardClick(); // reinitialise click logic)
        $(".wrapper").css("grid-template-columns", "repeat("+ x +", auto)");
        $(".wrapper").css("grid-auto-rows", 100 / (y*2) + "rem");
    });

    function makeGrid(x, y){
        var grid = $('.wrapper');

        grid.empty(); // clear the grid

        var cardTotal = x * y;
        var pairTotal = cardTotal / 2;

        var uniqueCats = [];
        var uniqueCatHistory = [];

        var shuffleHistory = [];

        var cats = [];
        var shuffled = [];

        function GetUniqueNumber(arr, range){
            debug(2, range);
            var randNum = Math.floor((Math.random() * range) + 1);
            if (arr.includes(randNum)){
                debug(2, randNum + " is not a unique number in array.\nGo fish!");
                return GetUniqueNumber(arr, range);
            }
            return randNum;
        }

        for (i = 0; i < pairTotal; i++){
            var catIndex = GetUniqueNumber(uniqueCatHistory, 15);
            uniqueCats.push(catIndex);
            uniqueCatHistory.push(catIndex);
        }

        debug(2, uniqueCats);

        for (cat of uniqueCats){
            cats.push(cat);
            cats.push(cat);
        }

        for (i = 0; i < cardTotal; i++){
            var randomNumber = GetUniqueNumber(shuffleHistory, cardTotal);
            shuffled.push(cats[randomNumber - 1]);
            shuffleHistory.push(randomNumber);
        }

        debug(2, "cats: " + cats);
        debug(2, "shuffled: " + shuffled);

        for (cat of shuffled){
            grid.append(
                "<div class='card-memory card-" + cat + "'>" +
                "<img class='front face' src='img/front.png' alt='Card image cap'>" +
                "<img class='back face' src='img/cat_" + cat + ".jpg' style='background-color: red;' >" +
                "</div>"
            );
        }

    }

    function CardClick(){
        $('.card-memory').mousedown(function(){

            $(this).addClass('flipped');
            $(this).removeClass('unflipped');

            var checkA = "";
            var checkB = "";

            $("div[class*='card-'].flipped").removeClass(function () {
                var className = this.className.match(/card-\d+/);
                if (className && checkA == "") {
                    checkA = className[0];
                    return;
                }
                checkB = className[0];
                if (checkA != checkB) {
                    setTimeout(
                        function(){
                            $("." + checkA + ".flipped" +
                            ",." + checkB + ".flipped").removeClass('flipped')
                                                        .addClass('unflipped');
                        }, 500);
                } else {
                    $("." + checkA + ".flipped" +
                        ",." + checkB + ".flipped").removeClass('flipped')
                                                    .addClass('matched');
                }
            });

            if ($(".matched").length >= total){
                if (clickCount <= total) {
                    alert("Cheater!");
                } else {
                    alert(" ^ↀᴥↀ^ You Scored " + score + " Points ^ↀᴥↀ^ ");
                }
            } else {
                clickCount++;
                if (clickCount >= total * 2 && clickCount % 2 == 0) {
                    score -= parseInt(100/total);
                }
            }
        });
    }


});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "15%";
}

    /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
} 