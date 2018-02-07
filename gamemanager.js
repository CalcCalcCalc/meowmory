var debugMode = 1;

function debug ( mode, string ) { 
    mode <= debugMode ? console.log( string ) : false; // Clearance for levels of debug
}

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
} 

function GameState(state){
    var body = $('body');
    switch (state){
        case "Start":
            debug(1, "Start");
            body.empty();
            body.append(
                '<main class="container start">'+
                    '<header>'+
                    '</header>'+
                    '<div class="d-flex justify-content-center">'+
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
                    '<script src="start.js"></script>'+
                '</main>'
            );
            break;
        case "Game":
            debug(1, "Begin");
            body.empty();
            body.append(
                '<script src="meowmory.js"></script>'+
                '<main class="container game">'+
                    '<header class="gameheader">'+
                    '<!-- The overlay -->'+
                    '<div id="myNav" class="overlay">'+
                        '<!-- Button to close the overlay navigation -->'+
                        '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>'+
                        '<!-- Overlay content -->'+
                        '<select id="difficulty">'+
                            '<option value="3,2">Easy</option>'+
                            '<option value="4,3">Medium</option>'+
                            '<option value="5,4">Hard</option>'+
                            '<option value="6,5">Extreme</option>'+
                        '</select>'+
                        '<a href="#" id="reset">Reset</a>'+
                    '</div>'+
                        '<img src="img/gear.png" class="gear" onclick="openNav()" height="50px">'+
                    '</header>'+
                    '<div class="">'+
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
                    '</div>'+       
                    '<footer>'+
                        '<p class="title" style="color: lightgrey;">Meowmory</p>'+
                        '<p class="credits" style="color: lightgrey;">Developed by Alec Stone and Designed by Irina Csapo for fun in 2018</p>'+
                    '</footer>'+
                '</main>'
            );
            break;
        case "Gameover":
            debug(1, "Gameover");
            body.empty();
            body.append(
                '<main class="container gameover">'+
                    '<header>'+
                    '</header>'+
                    '<div class="d-flex justify-content-center">'+
                        '<div class="intro">'+
                            '<p>You won with '+score+' points!</p>'+
                        '</div>'+
                        '<div class="btn-start">'+
                            '<p>Replay</p>'+
                        '</div>'+
                    '</div>'+
                    '<footer>'+
                        '<p class="title">Meowmory</p>'+
                        '<p class="credits">Developed by Alec Stone and Designed by Irina Csapo for fun in 2018</p>'+
                    '</footer>'+
                    '<script src="start.js"></script>'+
                '</main>'
            );
            break;
        default:
            debug(1, "Invalid Game State");
            break;
    }
}

$(document).ready(function(){
    GameState("Start");
});