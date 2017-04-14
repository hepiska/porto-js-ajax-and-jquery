$(document).ready(function() {
  var boxesNumber = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    $("button").click(function() {
        $.ajax({
            url: "http://www.colr.org/json/scheme/random",
            success: function(result) {
              var index =  getRandomInt(0, 8)
                var colors = JSON.parse(result)
                console.log(boxesNumber[index]);
                $("." + boxesNumber[index]).css("background-color", '#' + colors.schemes[0].colors[0])
            }
        });
    });
});
