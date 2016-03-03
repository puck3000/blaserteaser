$(function() {
   console.log('hello world!');



/*
 **********************
* Countdown
 **********************
*/

$("#Countdown")
   .countdown("2016/10/01", function(event) {
     $(this).text(
       event.strftime('%D Tage %H Stunden %M Minuten %S Sekunden')
     );
   });




});
