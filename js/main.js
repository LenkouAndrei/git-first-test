$(document).ready(function() {
/*slick-slider*/
  $('.slider').slick({
      dots: true,
      arrows: false,
      lazyLoad: 'progressive',
      autoplay: true,
      autoplaySpeed: 7500
  });
/*submenu for all*/
  $('.subhere').hover(
    function() {
    	if($(window).width() > 800){
    		$('.submenuList', this).slideDown(110);
    	}else{
    		var marHeight = parseFloat($(this).children().height()) + 10 + 'px';
    		$(this).css({'marginBottom':marHeight});
    		$(this).children('.submenuList').toggle();
    	}
    },
    function() {
    	if($(window).width() > 800){
      	$('.submenuList', this).slideUp(110);
      }else{
      	$(this).css({'marginBottom':'0px'});
    		$(this).children('.submenuList').toggle();
      }
    }
  );
/*menu-toggle small screen*/
  $("#menu-icon").on("click", function(){
  	$(".menuList").stop().slideToggle(1000);
  });

  $("#callForm").on("click", function(){
    $(this).css({'display': 'none'});
    $(".find").stop().slideToggle(1000);
  });

  $("#search").on("click", function(e){
    e.preventDefault();
  });
  $("#closeSearch").on("click", function(e){
    e.preventDefault();
    $('.find').css({'display': 'none'});
    $("#callForm").stop().toggle(300);
  });
});