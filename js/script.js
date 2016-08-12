/*******************Function for Alert********************/


$(document).ready(function() {
	
	$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').slideDown();
		
	});
	
	$('a.pop').click(function(e) {
		e.preventDefault();
	});
	
	$('a.pop').popover();
	
	$('[rel="tooltip"]').tooltip();
	
	/********MouseOver*************/
	$("#one").mouseover(function(){
        $("#one").css("opacity", 0.5);
    });
    $("#one").mouseout(function(){
        $("#one").css("opacity", 1);
    });
	
	$("#two").mouseover(function(){
        $("#two").css("opacity", 0.5);
    });
    $("#two").mouseout(function(){
        $("#two").css("opacity", 1);
    });

    $("#three").mouseover(function(){
        $("#three").css("opacity", 0.5);
    });
    $("#three").mouseout(function(){
        $("#three").css("opacity", 1);
    });
    $("#1image").mouseover(function(){
        $("#1image").css("opacity", 0.5);
	 });
    $("#1image").mouseout(function(){
        $("#1image").css("opacity", 1);
    });
	$("#2image").mouseover(function(){
	    $("#2image").css("opacity", 0.5);
	 });
    $("#2image").mouseout(function(){
        $("#2image").css("opacity", 1);
    });
	$("#3image").mouseover(function(){
        $("#3image").css("opacity", 0.5);
	 });
    $("#3image").mouseout(function(){
        $("#3image").css("opacity", 1);
    });
	$("#4image").mouseover(function(){
        $("#4image").css("opacity", 0.5);
	 });
    $("#4image").mouseout(function(){
        $("#4image").css("opacity", 1);
    });
    $("#5image").mouseover(function(){
	    $("#5image").css("opacity", 0.5);
	 });
    $("#5image").mouseout(function(){
        $("#5image").css("opacity", 1);
    });
	$("#6image").mouseover(function(){
        $("#6image").css("opacity", 0.5);
	 });
    $("#6image").mouseout(function(){
        $("#6image").css("opacity", 1);
    });
	$("#7image").mouseover(function(){
        $("#7image").css("opacity", 0.5);
	 });
    $("#7image").mouseout(function(){
        $("#7image").css("opacity", 1);
    });
    $("#butterfly").mouseover(function(){
        $("#butterfly").css("opacity", 0.5);
	 });
    $("#butterfly").mouseout(function(){
        $("#butterfly").css("opacity", 1);
    });
	$("#9image").mouseover(function(){
        $("#9image").css("opacity", 0.5);
	 });
    $("#9image").mouseout(function(){
        $("#9image").css("opacity", 1);
    });
    /*************Animation*****************/
    
});
