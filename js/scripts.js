$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#occupation").val();
    // var exclamationInput = $("input#exclamation").val();
    // var noun1Input = $("input#noun1").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun2").val();

    $(".person1").text($("input#person1").val());
    $(".person2").text($("input#person2").val());
    $(".occupation").text($("input#occupation").val());
    $(".exclamation").text($("input#exclamation").val());
    $(".noun1").text($("input#noun1").val());
    $(".verb").text($("input#verb").val());
    $(".noun2").text($("input#noun2").val());

    $("#story").show();

    event.preventDefault();
  });
});
