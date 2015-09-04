'use strict';

/*---------------------------- Activating Widgets & Interactions ----------------------------   */

$(function(){


	$('[data-toggle="tooltip"]').tooltip(); 

	$('[data-toggle="popover"]').popover(); 

	/* adding popover to explanation attr images brofe adding drag to them */

	$("[alt='explanation']").draggable({ containment: "#containmentParent", scroll: false });

	$( "#dialog" ).dialog();

	$("#myModal").draggable();

});
/*----------------------------- Effect --------------------------*/

$(function(){
	
 
    $( "#welcomeTextText" ).click(function(){
    		$(this).effect({
					effect: "bounce",
					/* explode effect
					easing: "easing",
					pieces: 4,*/
					times: 5,
					duration: 1000,
					complete: callback
    	});

    });

      function callback(){
      	setTimeout(function() {
        	$( "#welcomeTextText" ).removeAttr( "style" ).hide().fadeIn();
      		}, 1000 );
      }
    });

/*-------------------------------   Slider Home Page ------------------------------------ */
$(function(){
	var $slider = $("#lowerBodySlider");
	var $slides = $slider.find(".slides");
	var $slide = $slider.find(".slide");
	var tracker=1;
	var timer;
	function start(){  
		timer = setInterval(function(){
			$slides.animate({"margin-left":"-=877px"},1000,function() {
				tracker++;
				if( tracker === $slide.length )
				{
					tracker = 1;
					$slides.css("margin-left", 0);
				}
			});
	},
	3000);
	};
	function stop(){
		clearInterval(timer);
	}
	$slides.on('mouseenter', stop);
	$slides.on('mouseleave', start);

	start();
});

/*--------------------------------  Form Validation ----------------------------------*/
$(document).ready(function(){ 
	
	function signUpValidation(e){
		// Caching DOM
		var $fname = $("#fname").val();
		var $lname = $("#lname").val();
		var $pwd = $("#pwd").val();
		var $pwdCheck = $("#pwdCheck").val();		
		var $errorFname = $("#errorFname");
		var $errorLname = $("#errorLname");
		var $errorPwd = $("#errorPwd");		
		var $errorPwdCheck = $("#errorPwdCheck");

		var $namesPattern = /^[A-Za-z]+$/;
		var $pwdPattern = /^[A-Za-z0-9#@!$%\^&\*]+$/i;

		// form fields checks
		function checkFname(){
			if( !$fname.match($namesPattern) ){
				$errorFname.html("Please enter valid First Name!")
				$errorFname.addClass("error");
				return false;
			}
			else{
				return true;
			}
		}
		function checkLname(){
			if( !$lname.match($namesPattern) ){
				$errorLname.html("Please enter valid Last Name!");
				$errorLname.addClass("error");
				return false;
			} 	
			else{
				return true;
			}
		}
		function checkPwd(){	
			if( !$pwd.match($pwdPattern) ){
				$errorPwd.html("Password must contain at-least one Uppercase,Lowercase,Number and a special character!");
				$errorPwd.css("color",'red');
				return false;
			}
			else{
				return true;
			}

		function checkPswdMatch(){
			if( $pwd === $pwdCheck ){
				return true;
			}
			else{
				$errorPwdCheck.css("color",'red');
				$errorPwdCheck.html("Passwords donot match!");
				return false;
			}
		}
		// form action submit
		/*if(($errorFname == "") && ($errorLname == "") && ($errorPwd == "") && ($errorPwdCheck == ""))
		{
			return true;
		}
		else{
			return false;
		}*/
		checkFname();
		checkLname();
		checkPwd();
		checkPswdMatch();

	}
	//$("#singUpForm").submit(signUpValidation);

	$("#singUpForm").submit(signUpValidation(e))
	{
  		alert( "Handler for .submit() called." );
  		event.preventDefault();
	}

}})

/*---------------------------------- Set Cookie ---------------------------------------*/

$(document).ready(function(){ 
	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname+"="+cvalue+"; "+expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function checkCookie() {
		var user = getCookie("username");
		if (user != "") {
			alert("Welcome again " + user);
		} else if (user != "" && user != null) {		  
			setCookie("username", "#Fname",10);		   
		}
	}
	
	$('#singUpForm').click(checkCookie);
});
/*------------------------------Plain Javascript function ---------------------------------*/

function calcBMI(){
	var weight = prompt("Please enter your weight","");
	while( isNaN(weight) || (weight ===""))
		{
			alert("Please enter a valid numeric value");
			weight = prompt("Please enter your weight","");
			break;
		}
	var height = prompt("Please enter your height","");
		while(isNaN(height) || (height ===""))
		{
			alert("Please enter a valid numeric value");
			height = prompt("Please enter your height","");
			break;
		}

	var BMI = eval((Math.floor((weight*703)/(height*height))*100)/100);
				
		if(BMI>30)
			{
				alert("Your BMI is "+ BMI + ". It is in the unhealthy/Obese range.<br />");

				document.getElementById("result").innerHTML= ("Your BMI is "+ BMI + ". It is in the unhealthy/Obese range.<br /> Please Exercise and Eat Right!");
			}	
		else if(BMI<=30)
			{
				alert("Your BMI is "+ BMI +". It is in a healthy range.<br />");

				document.getElementById("result").innerHTML=("Your BMI is "+ BMI + ". It is in a healthy range.<br /> Keep-Up your healthy lifestyle!<br /> You are doing it right!!");
			}
		else
			{
				alert("Oops, something went wrong. Your BMI couldn't be calculated.<br />");

				document.getElementById("result").innerHTML= ("Try again.<br />");
			}
	};





/*----------------------------- Adding Styles using js -------------------------*/
$(function(){
	$("[alt='explanation']").css("padding-top","20px");

});








