$(document).ready(function(){
   var number;

   function assignRandomNumber(data) {
     // 1. retrieve the number returned in this json(data)
     // 2. assign that number to var number 
   };

   function getAndDisplayFact(){
     $.get('http://numbersapi.com/' + number + '/math?json')
       .done(function(data) {
         // 1. retrieve the fact returned in this json(data)
         // 2. display both number and its fact on the html page
       });
   }
  
  $.get('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8')
    .done(assignRandomNumber)
    .done(getAndDisplayFact);

});
