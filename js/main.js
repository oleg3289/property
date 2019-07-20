$(document).ready(function(){
	$('.go_to').click(function(){
		var link = $(this).attr('href');
		if ($(link).length != 0){
			$('body,html').animate({scrollTop: $(link).offset().top}, 700)
		}
		return false;
	})
})

jQuery(document).ready(function() {
  jQuery('.grid').magnificPopup({
    delegate: '.part',
    type:'image'
  });

  new WOW().init();

});