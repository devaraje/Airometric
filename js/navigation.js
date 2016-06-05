//event listeners
/*$('#page-body').on('scroll', onPageScroll);

function onPageScroll(evt){  //event handler for page scroll
  
  evt.preventDefault();
  
  hideLogo();
    
  }

function hideLogo(){
  
  $('#nav-logo').hide();
  
}*/

/*function init_carousel() {
            H = +($(window).height() 
            $('.carousel-inner').css('height', H + 'px');
        }
  
window.onload = init_carousel;
init_carousel();*/


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

$('#signup').click(function() {
    $( "#dialog" ).dialog();
  });