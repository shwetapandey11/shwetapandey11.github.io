'use strict'

/*---------------------- AJAX -------------------*/
$(document).ready(function(){
	
	$.ajax({
		url:"inventory.json",
		type:"GET",
		dataType: "json",
		success: successFunc,
		error:errorFunc
	});

	function successFunc(data, textStatus, jqXHR){
		display(data);
	}

	function errorFunc(jqXHR, textStatus, error){
		alert(JSON.stringify(error));
	}
	function display(data){
		$.each (data, function(i){
			//alert(i);
			var arrayItems = data[i];
			var element = $("#" + i).find(".displayItem");
			var html = "";
			
			$.each (arrayItems, function(j){
				var eachItem = arrayItems[j];
				
				html += "<li><div class='itemName'>" + eachItem.name.replace(/-/g," ")+ "</div>";
				if (eachItem.img){
					html += "<div class='itemImage'><img src='" + eachItem.img + "' border=0></div>"; 
				} else {
					html += "<div class='itemImage'><img src='images/Frock1.jpg'/></div>";
				}
				html += "<div class='itemPrice'>" + eachItem.price + "</div>";


				html += "<div class='checkbox'><p class='checkboxCookie text-center'><i class='fa fa-cart-plus'></i><input type='checkbox' id='checkboxCart'/></p></div></li>";


				/*var info = "<i class='fa fa-info-circle'></i>";

				if( $("#checkboxCart").is(':checked')){
					$(info).show();
				}else{
					$(info).hide();
				}*/

				
			});  
			element.append(html);


			$("li img").mouseover(function(){
				//alert ($(this).html());	
				$(this).css({"height": "150px", "width":"150px", "cursor": "pointer"});

				
			});
			$("li img").mouseout(function(){	
				//$(this).toggleClass("zoomImg", 1000, "easeOutBounce");
				$(this).css({"height": "138px", "width":"138px"});
			});	
	})};
});

/*----------------------------------  Widget ---------------------------------------*/

$(document).ready(function(){

	$("#myModal").draggable({containment: "#body", scroll: false});

	$("msg > row").css("pading","10px");
});


/*----------------------------------  cookie ---------------------------------------*/

function setCookie(cart,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cart+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cart + "=";
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
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}


function isItemInCart (itemId){
	var cookies = getCookie("cart");
	if (cookies === ""){
		return false;
	} else {
		if (cookies.indexOf(itemId) == -1){
			return false;
		}
	}
	return true;
}

function addItemToCookie(itemId){
	if (!isItemInCart){
		var cookies = getCookie("cart");
		cookies += ":"  + itemId;
		setCookie("cart", cookies);
	}
}

function remoteItemFromCookie(itemId){
	if (isItemInCart){
		var cookies = getCookie("cart");
		
	}
}
