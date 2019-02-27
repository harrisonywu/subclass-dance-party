$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });


  $('.addSpongebobButton').on('click', function (event) {

    var dancerMakerFunctionName = $(this).data('name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var spongebob = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
    );

    $('body').append(spongebob.$node);
    window.dancers.push(spongebob.$node);
  })
});


$('.addSquidwardButton').on('click', function (event) {

  var dancerMakerFunctionName = $(this).data('name');
  var dancerMakerFunction = window[dancerMakerFunctionName];

  var squidward = new dancerMakerFunction(
    $("body").height() * Math.random(),
    $("body").width() * Math.random()

  );
  $('body').append(squidward.$node);
  window.dancers.push(squidward.$node);
})

$('.addLineUpButton').click(function () {
  console.log('hello')
})