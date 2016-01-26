var clock;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(function() {
  // Set dates.
  var futureDate  = new Date("February 14, 2016 12:00 AM UTC+05:30");
  var currentDate = new Date();

  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // Calculate day difference and apply class to .clock for extra digit styling.
  function dayDiff(first, second) {
    return (second-first)/(1000*60*60*24);
  }

  if (dayDiff(currentDate, futureDate) < 100) {
    $('.clock').addClass('twoDayDigits');
  } else {
    $('.clock').addClass('threeDayDigits');
  }

  if(diff < 0) {
    diff = 0;
  }

  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });

  //Set zoom to make clock responsive
  if(isMobile) {
    var zoom = $(window).width()/620*0.75;
    $('.clock').css('zoom', zoom)
  }
});
$( ".register-form" ).submit(function(event) {
  event.preventDefault();
  
  
  var url = "http://52.32.112.6/api/ams/email_subscriptions";
  var data = { email: $('#emailVal').val() }
 
  // Send the data using post
  $.ajax({
          type: 'Post',
          url: url, 
          data: data
        }).done(function(res) {
          data = res;
          $('.failure').removeClass('failure');
          $('#reg-text').addClass('success');
          $('#emailVal').val('');
        })
        .fail(function(res) {
          data = res;
          $('.success').removeClass('success');
          $('#reg-text').addClass('failure');
        });
});