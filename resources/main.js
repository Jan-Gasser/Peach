window.onload = function() {
}

function loadContent() {
  var folder = 'images/*';

  $.ajax({
    url : folder,
    success: function(data) {
      $(data).find("a").attr("href", function (i, value) {
        $("#content-frame").append("<img src='" + folder + value + "'>");
      })
    }
  });
}
