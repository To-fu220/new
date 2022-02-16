
var Menu_order = ['Top','About','News','Member','Contact'];

$(function(){
    $('#header').load('parts/header.html');//ヘッダーの配置
    if($('#header').attr('name') == 'otherheader'){
        $('.nav_list li').eq(Menu_order.indexOf('About')).find('a').attr('href','./#about');
        $('.nav_list li').eq(Menu_order.indexOf('News')).find('a').attr('href','./#mininews');
        $('.nav_list li').eq(Menu_order.indexOf('Member')).find('a').attr('href','./#member');
    }
});