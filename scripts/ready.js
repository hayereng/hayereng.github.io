// Navigation Menu	
$(document).ready(function(){
;		
			
	$("#navigationBar").load("menu.html", function(){
			$("ul.sf-menu").superfish();
			});		
			
	$("#footer_middle").load("footer.html");				

});	

