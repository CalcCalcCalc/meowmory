$(document).ready(function(){
    var total = $(".card-memory").length;
    
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
        console.log("checkA = " + checkA);
        console.log("checkB = " + checkB);

        if ($(".matched").length >= total){
            alert(" ^ↀᴥↀ^ You won! ^ↀᴥↀ^ ");
        }
    });
});