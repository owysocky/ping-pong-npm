$(document).ready(function() {

  $("#formOne").submit(function(event){

    var unluckyEvents = [];
  $("input:checkbox[name=unlucky-events]:checked").each(function(){
      var unlucky = $(this).val();
      unluckyEvents.push(unlucky);
    });

    var luckyEvents = [];
  $("input:checkbox[name=lucky-events]:checked").each(function(){
      var lucky = $(this).val();
      luckyEvents.push(lucky);
    });


    if (unluckyEvents.length > luckyEvents.length){
      $("#toggleNeuturalFortune").hide();
      $("#toggleGoodFortune").hide();
      $("#toggleBadFortune").show();
    } else if (unluckyEvents.length < luckyEvents.length){
      $("#toggleBadFortune").hide();
      $("#toggleNeuturalFortune").hide();
      $("#toggleGoodFortune").show();
    } else {
      $("#toggleBadFortune").hide();
      $("#toggleGoodFortune").hide();
      $("#toggleNeuturalFortune").show();
    }

  event.preventDefault();
  });

});
