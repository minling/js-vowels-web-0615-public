'use strict';
$(function() {

var isAVowel = function(lttr){
  // your code goes here
};

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = $("#in").val();
    var result = isAVowel(input);
    $('#result').text(result);
  });
});
