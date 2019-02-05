$(function() {
  $("form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var animalInput = $("input#animal").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var exclamationInput = $("input#exclamation").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".animal").text(animalInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".exclamation").text(exclamationInput);

    $(".initially-hidden").show();

    event.preventDefault();
  });
});
