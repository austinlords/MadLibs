$(function() {
  var arrayOfLabels = ["name1", "name2", "animal", "verb", "noun", "exclamation"]

  $("form").submit(function(event) {
    arrayOfLabels.forEach(function(label) {
      var userInput = $("input#" + label).val();
      $("." + label).text(userInput);
    });
    $(".initially-hidden").show();
    event.preventDefault();
  });
});
