$(function(){
    $('li span').next().css('display','none');
    $('li .item1').next().css('display','block');
    $('li span').click(function(){
        $(this).next().slideToggle();
    })
});