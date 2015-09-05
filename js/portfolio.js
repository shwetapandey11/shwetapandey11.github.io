$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $("#one,#about").click(function(){
        $("#about,#two,#three").toggle();
    });

   /* $("#about,#one").click(function(){       
        $("#about").toggle( "clip", {direction: "vertical"}, 1500 );
        $("#one,#two,#three").toggle();
    });*/


    $("#two,#projetDivRight,#projetDivLeft").click(function(){
        $("#one,#two,#three,#projetDivRight,#projetDivLeft").toggle();
    });

    $("#three").click(function(){
    	$(this).find('img').slideToggle(1000);
    });
});