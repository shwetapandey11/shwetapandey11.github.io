$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $("#one,#about").click(function(){
        $("#two,#three ").toggle();
        $("#about").fadeToggle();
    });

    $("#two,#projetDivRight,#projetDivLeft").click(function(){
        $("#one,#three,#projetDivRight,#projetDivLeft").toggle();
        $("#two").toggleClass("xs-hidden");
  });

    $("#three").click(function(){
    	$(this).find('img').toggle();
    })

});