$(document).ready(function() {

  $("#formOne").submit(function(event){

    var input = $("input#userInput").val(); //30
    var arr = input.split("");
    var letters = ["e", "y", "u", "o", "i", "a","E","Y","U","O","I","A"];
    var final ="";

    for(i = 0; i<arr.length; i++){
 	    for(j = 0; j<letters.length;j++){
  	     if(arr[i]===letters[j]){

    	arr.splice(i,1,"-");

   }

  }
}
  $("#result").text(arr.join(""));

  $("#toggleResult").show();

  event.preventDefault();
  });



});
