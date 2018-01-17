$(document).ready(function(){
    var total = $(".card-memory").length;
    var score = 100;
    var clickCount = 0;
    
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
        console.log("score = " + score);

        if ($(".matched").length >= total){
            alert(" ^ↀᴥↀ^ You won! ^ↀᴥↀ^ \nScore: " + score + "Points\nMeow");
        } else {
            clickCount++;
            if (clickCount >= total * 2 && clickCount % 2 == 0) {
                score -= parseInt(100/total);
            }
        }
    });
});