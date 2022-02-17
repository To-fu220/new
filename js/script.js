
var Menu_order = ['Top','About','News','Member','Contact'];

$(function(){
    $('#header').load('./header.html', function(){header_rewrite();});//ヘッダーの配置

    function header_rewrite (){
        if($('#header').attr('name') == 'otherheader'){
            $('.nav_list li').eq(Menu_order.indexOf('About')).find('a').attr('href','./#about');
            $('.nav_list li').eq(Menu_order.indexOf('News')).find('a').attr('href','./#mininews');
            $('.nav_list li').eq(Menu_order.indexOf('Member')).find('a').attr('href','./#member');
        }
    }
    $(".selector").change(function () {
        $(this).removeClass('unselected');
    });
});
$(window).on('load', function() {
    //全画面ロード後実行

    $('#loading').delay(800).fadeOut(500);
});