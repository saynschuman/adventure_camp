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

				var tr6 = $('#table-6 tr').length;
				var tr7 = $('#table-7 tr').length;
				var tr8 = $('#table-8 tr').length;
				var tr9 = $('#table-9 tr').length;
				var tr10 = $('#table-10 tr').length;
				var tr11 = $('#table-11 tr').length;
				var tr12 = $('#table-12 tr').length;
				var tr13 = $('#table-13 tr').length;
				var tr14 = $('#table-14 tr').length;

			  if (age == 6) {
			  	$('.span-6').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-6').text(tr6 - 1);
			  }
			  if (age == 7) {
			  	$('.span-7').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-7').text(tr7 - 1);
			  }
			  if (age == 8) {
			  	$('.span-8').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-8').text(tr8 - 1);
			  }
			  if (age == 9) {
			  	$('.span-9').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-9').text(tr9 - 1);
			  }
			  if (age == 10) {
			  	$('.span-10').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-10').text(tr10 - 1);
			  }
			  if (age == 11) {
			  	$('.span-11').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-11').text(tr11 - 1);
			  }
			  if (age == 12) {
			  	$('.span-12').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-12').text(tr12 - 1);
			  }
			  if (age == 13) {
			  	$('.span-13').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-13').text(tr13 - 1);
			  }
			  if (age == 14) {
			  	$('.span-14').after('<tr><td>' + name + '</td><td>' + age + '</td></tr>');
			  	$('.all-14').text(tr14 - 1);
			  }

			  $('.result').show();
			  $('table#table-1').hide();

			});

		})
	})

})(jQuery);

