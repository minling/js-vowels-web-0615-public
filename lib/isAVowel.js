'use strict';

var isAVowel = function(lttr){
  var vowels = ["a","e","i","o","u"];
  
  if (vowels.indexOf(lttr) !== -1) {
    return true;
  }
  
  else {
    return false;
  }
 
    //   debugger;
    // vowels.forEach(function(vowel){
    //   if (vowel == lttr){
    //     return true; 
    //   }
    // });
    // return false
};

// var isAVowel = function(lttr){
//   var vowels = ["a","e","i","o","u"];
//     vowels.indexOf(function(vowel){
//       if (vowel == lttr){
//         return true; 
//       }
//       else if ((vowel == lttr)== -1){
//         return false
//       }
//     });
// };


// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

$(function() {
  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = $("#in").val();
    var result = isAVowel(input);
    $('#result').text(result);
  });
});

