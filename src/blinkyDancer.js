var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};



// because makeBlinkDancer is a subclass of makeDancer, we start out by calling makeDancer, but with "this" = to "this"