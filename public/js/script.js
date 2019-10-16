$(document).ready(function() {
  $("#changeQuote").on("submit", function(e) {
    console.log("hit");
    e.preventDefault();
    var data = $(".input").val();
    $.ajax({
      type: "post",
      url: "/ajax",
      data: data,
      dataType: "text",
      success: function(data, status, xhr) {
        // success callback function
        $("h1").text(this.data);
      }
    });
  });

  $(".btn").click(function() {
    $(".text").text("loading . . .");

    $.ajax({
      type: "GET",
      url: "https://api.meetup.com/2/cities",
      success: function(data) {
        $(".text").text(JSON.stringify(data));
      },
      dataType: "jsonp"
    });
  });
});
