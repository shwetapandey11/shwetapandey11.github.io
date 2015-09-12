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

				var incart = isItemInCart(eachItem.id);
				var onclickFunc = null;
				var btnLabel = "";
				var btnClass = "btn btn-warning btn-sm";
				if (!incart){
					onclickFunc = 'addItemToCookie(\"' + eachItem.id + '\")'; 
					btnLabel = "Add to Cart";

				} else {
					onclickFunc = "removeItemFromCookie(\"" + eachItem.id + "\")";
					btnLabel = "Remove from Cart";
					btnClass = "btn btn-danger btn-sm";
				}
				 
				html += "<div><button onclick='" + onclickFunc + "' class='" + btnClass + "'> " + 
							"<i class='fa fa-cart-plus'></i>" + btnLabel + "</div>";

				html += "</li>";


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
	console.log (itemId + " adding to cookie");
	if (!isItemInCart(itemId)){
		var cookies = getCookie("cart");
		cookies += ":"  + itemId;
		setCookie("cart", cookies);
		console.log ("setting cookie:" + cookies);
	}
	console.log ("exit add item to cookie");
}

function removeItemFromCookie(itemId){
	if (isItemInCart(itemId)){
		var cookies = getCookie("cart");
		var searchString = ":" + itemId;
		var newvalue = cookies.replace(searchString, "");
		setCookie("cart", newvalue);
	}
}
