$(document).ready(function(){
  $(document).foundation();

  $(window).scroll(function(){
      if ($(this).scrollTop() > $("#profile").offset().top) {
          $('.main-nav-full').addClass('fixed');
          $('.main-nav-responsive').addClass('fixed');
      } else {
          $('.main-nav-full').removeClass('fixed');
          $('.main-nav-responsive').removeClass('fixed');
      }
  });

  $(".responsive-nav-a").click(function(event){
    event.preventDefault();
    $( ".drop" ).slideToggle( "fast" );
  });

  $('.nav-button').click(function(){
      $('html,body').animate({
      scrollTop: $("#profile").offset().top
      }, 800);
  });


  $('.nav-profile').click(function(event){
    event.preventDefault();
      $('html,body').animate({
      scrollTop: $("#profile").offset().top
      }, 800);
      $( ".drop" ).slideToggle( "slow" );
    });
  $('.nav-entrepreneur').click(function(event){
    event.preventDefault();
      $('html,body').animate({
      scrollTop: $("#entrepreneur").offset().top
      }, 800);
      $( ".drop" ).slideToggle( "slow" );
    });
  $('.nav-projects').click(function(event){
    event.preventDefault();
      $('html,body').animate({
      scrollTop: $("#projects").offset().top
      }, 800);
      $( ".drop" ).slideToggle( "slow" );
    });
  $('.nav-contact').click(function(event){
    event.preventDefault();
      $('html,body').animate({
      scrollTop: $("#contact").offset().top
      }, 800);
      $( ".drop" ).slideToggle( "slow" );
    });

  $("#main_home_div").animate({
      opacity: 1,
      marginTop: "20%"
      },1000);
  $(".nav-button").mouseover(function(){
    $(".icon-chevron-down").animate({
        opacity: 0.5
        },100);
    })
    .mouseout(function(){
      $(".icon-chevron-down").animate({
        opacity: 1
        },100);
    });
    $(document).foundation({
    offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
    open_method: 'move',
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
    close_on_click : true
  }
});
});