$(function(){
    $('ul.nav > li').addClass('myPerfectClass');
    $('ul.a > li').addClass('myhref1');
    
    $('.SignUp').on('click',function(){
        $('.popup').css('display','block');
    });
    $('.popup__close').on('click',function(){
        $('.popup').css('display','none');
    });
  
});

