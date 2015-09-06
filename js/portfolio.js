$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){

    /*-----------  About Effects     -------------*/

    $("#one").click(function(){
        $("#about").toggle("clip",1500);
        $("#one,#two,#three").hide();
    });
    $("#about").click(function(){
        $("#one,#two,#three,#about").toggle();
    });

    /*-----------  Projects Effects     -------------*/

    $("#two").click(function(){

        $("#projetDivRight,#projetDivLeft").toggle( "bounce",1500);

        $("#one,#two,#three").hide();

    });

    $("#projetDivRight,#projetDivLeft").click(function(){

        $("#one,#two,#three,#projetDivRight,#projetDivLeft").toggle();

    });

    /*-----------  Contact Effects     -------------*/


    $("#three").click(function(){
         var span = $("#three").find("span");
         $(span).toggle();
    });

});