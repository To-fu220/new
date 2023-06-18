$(function(){
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