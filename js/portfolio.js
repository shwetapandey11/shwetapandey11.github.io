'use strict'

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){

    /*-----------  About Effects     -------------*/

    $("#one img").click(function(){
        var v = $("#about").is(":visible");
        if (v){
            $("#about").hide(1000, function (){
                $("#two,#three").show(1500);
            });
        } else {
           $("#two,#three").hide(1000, function (){
                $("#about").show(1500);
            }); 
        }
    });
    

    /*-----------  Projects Effects     -------------*/

    $("#two img").click(function(){

        
        $("#one,#two,#three").hide(1000, function (){
         
            $("#projetDivRight,#projetDivLeft").show(1000);
        });

    });

    $("#projetDivRight,#projetDivLeft").click(function(){
        
        $("#projetDivRight,#projetDivLeft").hide(1000, function (){
            $("#one,#two,#three").show (1000);
        });

    });

    /*-----------  Contact Effects     -------------*/


    $("#three").click(function(){
         var span = $("#three").find("span");
         $(span).toggle();
    });

});


