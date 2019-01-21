$(document).ready(function() {

  $("#formOne").submit(function(event){

    var input = $("input#userInput").val(); //30
    var arr = input.split("");
    var letters = ["e", "y", "u", "o", "i", "a"];
    var output ="";

    for(var i =0; i<arr.length; i++){

      for(var j=0; j<letters.length; j++){
        if(arr[i]=== letters[j]){
        arr[i].replace(letters[j], "-");

        }
        alert(arr);

      }
    }






  event.preventDefault();
  });
});
