'use strict'

/*-------------------------------------------- AJAX -----------------------------------------*/
$(document).ready(function(){
	
	$.ajax({
		url: 'inventory.json',
		type: 'GET',
		dataType: 'json',
		success: successFunc,
		error: errorFunc
	});

	function successFunc(data, textStatus, jqXHR){
		display(data);
	};

	function errorFunc(jqXHR, textStatus, error){
		alert(JSON.stringify(error));
	};

	

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
					html += "<div class='itemImage'> "+ eachItem.name + "'s Image Unavaiable </div>";
				}
				html += "<div class='itemPrice'>" + eachItem.price + "</div>";

					var incart = isItemInCart(eachItem.id);
					var onclickFunc = null;
					var btnLabel = "";
					var btnClass = "btn btn-warning btn-sm";
					if (!incart){
						onclickFunc = 'addItemToCookie(\"' + eachItem.id + '\")'; 
						//alert(onclickFunc);
						btnLabel = "Add to Cart";
				
						$("#cartDisplay").html("<tr><td>" + eachItem.Name + "</td>" + " : " + "<td>"+ eachItem.price +"</td></tr>");
					} else {	

						onclickFunc = "removeItemFromCookie(\"" + eachItem.id + "\")";
						btnLabel = "Remove from Cart";
						btnClass = "btn btn-danger btn-sm";
					}
				 
				html += "<div><button id='btn" + eachItem.id + "' onclick='" + onclickFunc + "' class='" + btnClass + "'> " + 
							"<i class='fa fa-cart-plus'></i>" + btnLabel + "</button></div>";

				html += "</li>";
				
			});  
			element.append(html);


			$("li img").mouseover(function(){
				$(this).css({"height": "150px", "width":"150px", "cursor": "pointer"});

				
			});
			$("li img").mouseout(function(){	
				$(this).css({"height": "138px", "width":"138px"});
			});	
	})};
	
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
	return cookies;
}

function removeItemFromCookie(itemId){
	if (isItemInCart(itemId)){
		var cookies = getCookie("cart");
		var searchString = ":" + itemId;
		var newvalue = cookies.replace(searchString, "");
		setCookie("cart", newvalue);
	}
}

/*----------------------------------  Widget ---------------------------------------*/

$(document).ready(function(){

	$("#myModal").draggable({containment: "#body", scroll: false});

	$("msg > row").css("pading","10px");
});


/*----------------------------------  Scrolling Messages [Coupons & Promotions]  ---------------------------*/

$(document).ready(function(){

	var promotions = "Only " + 60 + " shopping days left until Thanksgiving ! HURRY !!! Over  $1000 saving inside !!! ";
	function scroller(){ 
		promotions = promotions.substring(1, promotions.length) + promotions.substring(0,1); 
		$("#msg2 > .row > p").text(promotions); 
		setTimeout(scroller, 300);
	}
	scroller();

});


var Cart = (function(){

	var itemsInCart = [];

	return {
		addItem : function (item){
			//alert ("adding item");
		},
		removeItem : function (item){
			//alert ("removing item");
		},
		getItems : function (){
			//alert ("showing items");
		}
	}

})();

Cart.getItems();
Cart.addItem();
Cart.removeItem();