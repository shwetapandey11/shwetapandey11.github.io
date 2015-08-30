$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $("#one").click(function(){
        $("#two,#three").toggle();
        $("#about").slideToggle("slow");
    });

    $("#two").click(function(){
        $("#one,#three").slideToggle("slow");
        $("#projetDivRight,#projetDivLeft").slideToggle("slow");
    });

    $("#three").click(function(){
    	$(this).find('img').toggle();
    })

});