
var Menu_order = ['Top','About','News','Member','Contact'];

$(function(){
    $('#header').load('./component/header.html', function(){header_rewrite();});//ヘッダーの配置
    $('#footer').load('./component/footer.html');//フッター＋なんちゃってクッキーの配置
    function header_rewrite (){
        if($('#header').attr('name') == 'otherheader'){
            $('.nav_list li').eq(Menu_order.indexOf('About')).find('a').attr('href','./#about');
            $('.nav_list li').eq(Menu_order.indexOf('News')).find('a').attr('href','./#mininews');
            $('.nav_list li').eq(Menu_order.indexOf('Member')).find('a').attr('href','member.html');
        }
    }
    $(".selector").change(function () {
        if ($('.unselected').length){
            $('.unselected').removeClass('unselected');
            $(this).find('option').eq(0).prop('disabled',true);
            $(this).find('option').eq(0).css({'display':'none'});
        }
        //綾瀬はるか様強制入力
        if ($(this).find('select').val() == '綾瀬はるか様からのお問い合わせ') {
            $('input[name=name]').val('綾瀬はるか');
            $('input[name=name]').prop('disabled', true);
        }else{
            $('input[name=name]').val('');
            $('input[name=name]').prop('disabled', false);
        }
    });
    //なんちゃってcookie
    $(document).on('click', '#wannabe-cookie', function () {
        var element = $('#cookie-permission');
        element.fadeOut(200, function(){
            element.remove();
        });
    });
});
$(window).on('load', function() {
    //全画面ロード後実行

    $('#loading').delay(800).fadeOut(500);
});