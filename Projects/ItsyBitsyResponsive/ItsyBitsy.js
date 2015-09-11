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
				html += "<div class='itemPrice'>" + eachItem.price + "</div></li>";
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

});


