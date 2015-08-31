$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    $("#one,#about").click(function(){
       /* $("#two,#three").toggle();*/
        $("#about").slideToggle(2000);
    });

    $("#two,#projetDivRight,#projetDivLeft").click(function(){
        $("#one,#three,#projetDivRight,#projetDivLeft").toggle();
/*        $("#projetDivRight,#projetDivLeft").fadeToggle();
*/  });

    $("#three").click(function(){
    	$(this).find('img').toggle();
    })

});