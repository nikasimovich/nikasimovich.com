jQuery(document).ready(function($) {
  /*  var backColor = new Array();
    backColor[0] = '#FCFCC2';
    backColor[1] = '#44FFE1';
    backColor[2] = '#77FFAE';
    backColor[3] = '#7CFFC0';
    function changeBG(whichColor){
    document.body.style.background = backColor[whichColor];
    }

    var colors = Array("#F63800", "#8DC149", "#0AA480", "#F4C80F", "#334957", "#EFF3F7", "#70869B"), idx;
    $('.email, .cv-link, ').hover(function(){
      idx = Math.floor(Math.random() * colors.length); // Pick random index
      $(this).css("color",  colors[idx]);
      $(this).css("background-color",  colors[idx]);
    }, function() {
      $(this).css("color", "#000");
      $(this).css("background-color", "#000");
    });



    /*$var numRand = Math.floor(Math.random()*950);
    ("#nav-titles").css({'margin-left': numRand});*/
    $('#nav-titles').draggable();
    // $('#nav-titles').localScroll({offset:-22,duration:800,easing:'easeInCubic'});
    $('#nav-titles a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        var scrollPoint = $(id).offset().top - 20;
        $('html, body').animate({scrollTop: scrollPoint});
    })


    $('.project').waypoint(function(direction) {
        console.log(direction);
        $('#nav-titles a').removeClass('selected');
        $('a[href="#' + $(this).attr('id') + '"]').addClass('selected');
    }, {
        offset: function(){
            return -$(this).height();
        }}
    );

    $('.cv-link').click(function() {
        $('#cv, #wrapper').toggleClass('hide');
        });
    $('#close').on("click touchend", function() {
        $('#cv, #wrapper').toggleClass('hide');
        });

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});
