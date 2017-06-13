(function($) {
    
	$(window).on('load', function(){
		$('tr').addClass('tr');
		$('tr td:first-child').addClass('first');
		$('tr td:last-child').addClass('last');

		var	first = [],
			second = [],
			third = [],
			fourth = [],
			fifth = [],
			sixth = [];
			seventh = [],
			eighth = [];

		$('#sort').click(function(e){
			e.preventDefault();
			$('.tr').each(function() {

			  var name = $(this).children('td:first-child').text();
			  var age = parseInt($(this).children('td:last-child').text());

			  if (age == 6) {
			  	$('.span-6').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  }
			  if (age == 7) {
			  	$('.span-7').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');

			  }
			  if (age == 8) {
			  	$('.span-8').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');

			  }
			  if (age == 9) {
			  	$('.span-9').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');

			  }
			  if (age == 10) {
			  	$('.span-10').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  }
			  if (age == 11) {
			  	$('.span-11').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  }
			  if (age == 12) {
			  	$('.span-12').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  }
			  if (age == 13) {
			  	$('.span-13').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  }
			  if (age == 14) {
			  	$('.span-14').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  }

			  $('.result').show();
			  $('table#table-1').hide();

			});
			
		})
	})

})(jQuery);

