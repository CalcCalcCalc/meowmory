var debugMode = 1;

function debug ( mode, string ) { 
    mode <= debugMode ? console.log( string ) : false; // Clearance for levels of debug
}

function GameState(state){
    var main = $('main');
    switch (state){
        case "Start":
            debug(1, "Start");
            main.empty();
            main.append(
            '<div class="start d-flex justify-content-center">'+
                '<div class="intro">'+
                    '<p>Tap the meows to test your meowmory.</p>'+
                '</div>'+
                '<div class="btn-start">'+
                    '<p>Play</p>'+
                '</div>'+
            '</div>'+
            '<footer>'+
                '<p class="title">Meowmory</p>'+
                '<p class="credits">Developed by Alec Stone and Designed by Irina Csapo for fun in 2018</p>'+
            '</footer>'+
            '<script src="start.js"></script>'
            );
            break;
        case "Game":
            debug(1, "Begin");
            main.empty();
            main.append(
            '<div class="game">'+
                '<div class="wrapper">'+
                    '<div class="card-memory card-1">'+
                        '<img class="front face" src="img/front.png" alt="Card image cap">'+
                        '<img class="back face" src="img/cat_1.jpg" style="background-color: red;" >'+
                    '</div>'+
                    '<div class="card-memory card-2">'+
                        '<img class="front face" src="img/front.png" alt="Card image cap">'+
                        '<img class="back face" src="img/cat_2.jpg" style="background-color: red;" >'+
                    '</div>'+
                    '<div class="card-memory card-1">'+
                        '<img class="front face" src="img/front.png" alt="Card image cap">'+
                        '<img class="back face" src="img/cat_1.jpg" style="background-color: red;" >'+
                    '</div>'+
                    '<div class="card-memory card-3">'+
                        '<img class="front face" src="img/front.png" alt="Card image cap">'+
                        '<img class="back face" src="img/cat_3.jpg" style="background-color: red;" >'+
                    '</div>'+
                    '<div class="card-memory card-2">'+
                        '<img class="front face" src="img/front.png" alt="Card image cap">'+
                        '<img class="back face" src="img/cat_2.jpg" style="background-color: red;" >'+
                    '</div>'+
                    '<div class="card-memory card-3">'+
                        '<img class="front face" src="img/front.png" alt="Card image cap">'+
                        '<img class="back face" src="img/cat_3.jpg" style="background-color: red;" >'+
                    '</div>'+
                '</div>'+
                '<img src="img/gear.png" class="gear" height="50px" onclick="openNav()">'+
            '</div>'+       
            '<footer>'+
                '<p class="title">Meowmory</p>'+
                '<p class="credits">Developed by Alec Stone and Designed by Irina Csapo for fun in 2018</p>'+
            '</footer>'+
            '<script src="meowmory.js"></script>'
            );
            break;
        case "Gameover":
            debug(1, "Gameover");
            // Clear main
            // Append Gameover HTML
            break;
        default:
            debug(1, "Invalid Game State");
            break;
    }
}

$(document).ready(function(){
    GameState("Start");
});