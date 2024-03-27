// Point Clicker
var points = 0;

$(document).ready(function() {
    $("h1").css("colour", "red");
    $("button");
});

onEvent("clicker1", "click", function( ) {
    points = points + 1;
    setText("points", points, 80, 120);
});