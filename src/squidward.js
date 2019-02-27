var makeSquidward = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('squidward');
};

makeSquidward.prototype = Object.create(makeDancer.prototype);
makeSquidward.prototype.constructor = makeSquidward;

makeSquidward.prototype.step = function () {

  makeDancer.prototype.step.call(this);

};