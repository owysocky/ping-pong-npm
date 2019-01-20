$(document).ready(function() {

  $("#formOne").submit(function(event){

    var theNumberTO = parseInt($("input#numberTO").val()); //30
    var theNumberBY = parseInt($("input#numberBY").val()); //5

    if(theNumberBY >0 && theNumberTO>0 && theNumberBY<theNumberTO){
      for( i = theNumberBY; i <= theNumberTO; i += theNumberBY){

      $("#result").append(" "+i)

      }
    } else {
      alert("Enter the valid number.")
    }




  event.preventDefault();
  });
});
