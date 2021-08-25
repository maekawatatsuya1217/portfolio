window.onload=function(){
  
  var scroll = document.querySelectorAll('.anime_up');
       
  var Animation = function() {
    for(var i = 0; i < scroll.length; i++) {
    var triggerMargin = 50;
    if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
    scroll[i].classList.add('show');
    }
    }
    }
    window.addEventListener('scroll', Animation);

    window.addEventListener('DOMContentLoaded', function(){
      $('a[href^=#]').click(function() {
        var speed = 100;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });
    });

}