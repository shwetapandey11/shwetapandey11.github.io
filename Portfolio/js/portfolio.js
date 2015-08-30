$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $("#one").click(function(){
        $("#two,#three").toggle();
        $("#about").fadeToggle("slow");
    });

    $("#two").click(function(){
/*        $("#one,#three").slideToggle("slow");
*/        $("#projetDivRight,#projetDivLeft").slideToggle("slow");
    });

});