$(".image").magnificPopup({
  type: "image",
  removalDelay: 300,

  gallery: {
    enabled: true,
    preload: [0, 2]
  }
});

$(document).ready(function() {
  var $orderNowBtn = $(".order-now");
  var $card = $(".card");
  var $flipTheCard = $(".card-active");
  var $undoBtn = $(".undo-btn");

  $orderNowBtn.on("click", function() {
    $(this).parent($card).css("transform", "rotateY(180deg)");
  });

  $undoBtn.on("click", function() {
    $(this).parent($card).css("transform", "rotateY(180deg)");

    console.log('hi');
  });
});
