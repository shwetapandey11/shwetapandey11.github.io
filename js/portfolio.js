$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $("#one,#about").click(function(){
        $("#about,#two,#three ").toggle();
    });

    $("#two,#projetDivRight,#projetDivLeft").click(function(){
        $("#one,#three,#projetDivRight,#projetDivLeft").toggle();
        $("#two").toggleClass("xs-hidden");
  });

    $("#three").click(function(){
    	$(this).find('img').toggle();
    })

});