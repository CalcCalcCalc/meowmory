$(document).ready(function(){
    $('.btn-start').mouseover(
        function(){ $(this).toggleClass('shadow-drop-2-center') }
    );
    $('.btn-start').mouseout(
        function(){ $(this).toggleClass('shadow-drop-2-center') }
    );
    $('.btn-start').click(function(){
        GameState('Game');
    });
});