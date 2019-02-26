// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps) {


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

// we make a variable makeDancer that contains a class for Dancer, but also invokes two methods at call time, step and set position
// this.node is the tag/element that makeDancer is, which is a span (one line), with a class of "dancer"
// we invoke step and set position
// step - will run step once every "this.timeBetweenSteps"
  //

