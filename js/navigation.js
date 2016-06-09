//event handler for window load
//do not show the logo in the header if the window size is < 800px
$(window).load(function() {
  
  if ($(window).width() <= 800){
        
        $('.nav-font').css('font-size', '1.5em');
        $('#nav-logo').hide();
       
  }
  else {
    
    $('#nav-logo-small').hide();

  }
  
});


//event handler for window scroll
/*$( window ).scroll(function() {
  
  if ($(window).width() <= 800){
        
        $('.nav-font').css('font-size', '2em');
        $('#nav-logo').hide();
		$('#nav-logo-small').show();
    
  }
  else {
    
    $('#nav-logo-small').hide();
    $('#nav-logo').show();
  }
  
});*/

