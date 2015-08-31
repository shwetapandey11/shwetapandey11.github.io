$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $("#one").click(function(){
       /* $("#two,#three").toggle();*/
        $("#about").slideToggle("slow");
    });

    $("#about").click(function(){
    	$(this).slideToggle("slow");
    });

    $("#two").click(function(){
        $("#one,#three,#projetDivRight,#projetDivLeft").toggle();
/*        $("#projetDivRight,#projetDivLeft").fadeToggle();
*/  });

    $("#three").click(function(){
    	$(this).find('img').toggle();
    })

});