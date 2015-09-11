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
				
				html += "<li>" + eachItem.name.replace(/-/g," ")+ "<br/><br/>";
				if (eachItem.img){
					html += "<img src='" + eachItem.img + "' border=0/><br/>"; 
				} else {
					html += "<img src='images/Frock1.jpg'/>";
				}
				html += "<br/>" + eachItem.price + "</li>";
			});
			element.append(html);


			$("li img").hover(function(){	
				$(this).addClass("zoomImg", 1000, "easeOutBounce");
				},function(){
					$(this).removeClass('zoomImg');
				});
	})};
});

/*----------------------------------  Widget ---------------------------------------*/

$(document).ready(function(){

	$("#myModal").draggable({containment: "#body", scroll: false});

});


