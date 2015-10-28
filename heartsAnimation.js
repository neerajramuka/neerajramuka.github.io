var HeartAnimation = function(input) {
  this.button = input.button;
  this.originPoint = input.originPoint;
  this.element = input.element;
  this.heartColours = ['#EBE5A9', '#71C48C', '#FAA495', '#D45D95', '#96D4E1'];
}

HeartAnimation.prototype.addHeart = function() {
  var newElement = this.element.clone(),
  randColor = Math.floor(Math.random() * (5));
  randFontSize = Math.floor(Math.random() * (8)) + 12;
  newElement.css('color', this.heartColours[randColor]);
  newElement.css('font-size', randFontSize);
  newElement.appendTo(this.originPoint);
};

HeartAnimation.prototype.buttonClickEvent = function() {
  var _this = this;
  this.button.click( function() {
    _this.addHeart();
  });
};

$(document).ready(function() {
  var input = {
    button : $('#button'),
    originPoint : $('#origin-point'),
    element : $('.heart')
  }
  var heartAnimation = new HeartAnimation(input);
  heartAnimation.buttonClickEvent();
});