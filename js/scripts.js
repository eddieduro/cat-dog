$("document").ready(function() {
  // cat script
  $("button#cat-btn").click(function() {
    $("ul#cat-text").prepend("<li>Meow!</li>");
    $("ul#dog-text").append("<li>Bark!</li>");
  });

  // dog script
  $("button#dog-btn").click(function() {
    $("ul#dog-text").prepend("<li>Bark!</li>");
    $("ul#cat-text").append("<li>Meow!</li>");
  });
});
