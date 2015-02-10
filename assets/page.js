$(document).ready(function(){
  $(document).foundation();

  $('.nav-button').click(function(){
      $('html,body').animate({
      scrollTop: $("#profile").offset().top
      }, 800);
    });
  $("#main_home_div").animate({
      opacity: 1,
      marginTop: "20%"
      },1000);
  $(".nav-button").mouseover(function(){
    $(".icon-arrow-down").animate({
        opacity: 0.5,
        marginTop: "40%"
        },100);
    })
    .mouseout(function(){
      $(".icon-arrow-down").animate({
        opacity: 1,
        marginTop: "0"
        },100);
    });
});