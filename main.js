(function($) {
    
	$(window).on('load', function(){
		$('tr').addClass('tr');
		$('tr td:first-child').addClass('first');
		$('tr td:last-child').addClass('last');
		
		$('#sort').click(function(e){
			e.preventDefault();
			
			first = [];
			second = [];
			third = [];
			fourth = [];
			fifth = [];
			sixth = [];
		})
	})

})(jQuery);

