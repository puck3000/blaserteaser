$(function() {
   // console.log('hello world!');



/*
 **********************
* Countdown
 **********************
*/

$("#Countdown")
   .countdown("2016/10/25 09:00:00", function(event) {
     $(this).text(
       event.strftime('%-D Tag%!D:e; %H %!H:Stunde,Stunden; %M %!M:Minute,Minuten; %S %!S:Sekunde,Sekunden;')
     );
   });


/*
 **********************
* Accordeon
 **********************
*/

// vars

var accordeon = $('#accordeon');
var toggle = $('.toggle');
var content = $('.accordeonContent');


function close_accordion_section() {
        toggle.removeClass('active');
        content.slideUp(300).removeClass('open');

    }

close_accordion_section();

	$(toggle).click(function(e) {
	        // Grab current anchor value
			var currentAttrValue = $(this).attr('href');
			
			if ( $( this ).hasClass( "active" ) ) {
				close_accordion_section();
			}

			else {

	        // Open and close here
			$(toggle).removeClass('active');
			$(content).slideUp(300).removeClass('open');

			$(this).addClass('active');
			$('#accordeon ' + currentAttrValue).slideDown(300).addClass('open'); 

			}

		e.preventDefault();

	    });




});
