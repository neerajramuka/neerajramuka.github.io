var HeartAnimation = function(input) {
  this.button = input.button;
  this.originPoint = input.originPoint;
  this.element = input.element;
  this.heartColours = ['#EBE5A9', '#71C48C', '#FAA495', '#D45D95', '#96D4E1'];
}

HeartAnimation.prototype.addHeart = function() {
  var newElement = this.element.clone(),
  randomColor = Math.floor(Math.random() * (5)),
  randomDeg = Math.random() * 60 - 30,
  randomLeftValue = Math.random() * 60 - 30,
  randomScaleValue = Math.random() + 1,
  randomSec = Math.random() * 5 + 2;
  newElement.css('color', this.heartColours[randomColor]);
  newElement.css('left', randomLeftValue);
  newElement.css('transform', 'rotate(' + randomDeg + 'deg) scale(' + randomScaleValue + ')');
  newElement.css('animation', 'flyup ' + randomSec + 's forwards');
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