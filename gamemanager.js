var debugMode = 0;

function debug ( mode, string ) { 
    mode <= debugMode ? console.log( string ) : false; // Clearance for levels of debug
}

$(document).ready(function(){

    var main = $('main');

    StateSwitch("Game");

    function StateSwitch(state){
        switch (state){
            case "Start":
                debug(1, "Start");
                // Clear main
                // Append Start HTML
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
                    '<script src="meowmory.js"></script>'+
                '</div>'
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
});