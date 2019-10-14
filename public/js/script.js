$(function() {
  setTimeout(function() {
    $("#message").hide("slow");
  }, 2000);
});

$(".avtar").click(function() {
  $(".dropdown").toggle("slow");
});

("use strict");

var searchBox = document.querySelectorAll(
  '.search-box input[type="text"] + span'
);

searchBox.forEach(elm => {
  elm.addEventListener("click", () => {
    elm.previousElementSibling.value = "";
  });
});
