var makeSpongebob = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('spongebob');
};

makeSpongebob.prototype = Object.create(makeDancer.prototype);
makeSpongebob.prototype.constructor = makeSpongebob;

makeSpongebob.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};