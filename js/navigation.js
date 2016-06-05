//event listeners
/*$('#page-body').on('scroll', onPageScroll);

function onPageScroll(evt){  //event handler for page scroll
  
  evt.preventDefault();
  
  hideLogo();
    
  }

function hideLogo(){
  
  $('#nav-logo').hide();
  
}*/

$(document).load(function() {
  
  if ($(window).width() <= 800){
        
        $('.nav-font').css('font-size', '.75em');
		/*$('#nav-logo').hide();*/
	}
  
});
  

$( window ).scroll(function() {
  
  if ($(window).width() <= 800){
        
        $('.nav-font').css('font-size', '.75em');
		/*$('#nav-logo').hide();*/
	}
  
});
