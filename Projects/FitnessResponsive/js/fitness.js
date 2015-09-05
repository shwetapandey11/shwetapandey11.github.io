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
	var width = "877";
	var timer;
	function start(){  
		timer = setInterval(function(){
			$slides.animate({"margin-left" : "-=" + width},1000,function() {
				tracker++;
				if(tracker === $slide.length )
				{
					tracker = 1;
					$slides.css("margin-left", 0);
				}
			});
	},
	4000);
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
	var $namesPattern = /^[A-Za-z]+$/;
	var $pwdPattern = /([a-zA-Z0-9!%&@*#]{8,})/;
	var $errorFname = $("#errorFname");
	var $errorLname = $("#errorLname");
	var $errorPwd = $("#errorPwd");
	var $errorPwdCheck = $("#errorPwdCheck");


		
	function validate(){
		var result = checkFname();
		if (result){
			result = checkLname();
		}
		if (result){
			result = checkPwd();
		}
		return result;
	}

	function checkFname(){
		var $fname = $("#fname").val();
		if( !$namesPattern.test($fname) ){
			$errorFname.html("Please enter valid first name!")
			$errorFname.addClass("error");
			return false;
		}
		else{
			$errorFname.html("");
			return true;
		}
	}
	function checkLname(){
		//alert("2");
		var $lname = $("#lname").val();
		if( !$namesPattern.test($lname) ){
			$errorLname.html("Please enter valid last name!");
			$errorLname.addClass("error");
			return false;
		} 	
		else{
			$errorLname.html("");
			return true;
		}
	}
	function checkPwd(){
		var $password = $("#password").val();
		var $pwdCheck = $("#pwdCheck").val();
		
		if( !$pwdPattern.test($password) ){
			$errorPwd.html("Password must contain at-least one uppercase, lowercase, number and a special character!");
			$errorPwd.css("color",'red');
			return false;
		} else {
			$errorPwd.html("");
		} 

		

		if ($password !== $pwdCheck){
			$errorPwdCheck.css("color",'red');
			$errorPwdCheck.html("Passwords do not match!");
			return false;			
		} else {
			$errorPwdCheck.html("");
		}

		
		$errorPwd.html("");
		$errorPwdCheck.html("");
		return true;
	}

	$("#singUpForm").submit (function (e){
		var ans = confirm("Do you want to submit your form!");
		if (ans){
			e.preventDefault();
			var result = validate();
			if (result){
				alert ("Thank you, your form has been submitted.");
				window.location.reload();
			} else {
				alert ("There was an error in the form, please correct and submit again.");
			}
			
		}
		
		
	});
});

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








