$(function() {

    $('#post-form > input').focus(function() {
        adjust('80%', '20%');
    });

    $('#post-form > input').focusout(function() {
        adjust('50%', '50%');
    });

    $('#query-form > input').focus(function() {
        adjust('20%', '80%');
    });

    $('#query-form > input').focusout(function() {
        adjust('50%', '50%');
    });

    $('#post-form').submit(function() {
        adjust('50%', '50%');
        $('#post-form > input').blur();
    });

    $('#query-form').submit(function() {
        adjust('50%', '50%');
        $('#query-form > input').blur();
    });

    $('#post-form').hover(
        function() {
            adjust('60%', '40%');
        },
        function() {
            if($('#query-form > input').is(':focus'))
                adjust('40%', '60%');
            else if(!$('#post-form > input').is(':focus'))
                adjust('50%', '50%');
        }
    );

    $('#query-form').hover(
        function() {
            adjust('40%', '60%');
        },
        function() {
            if($('#post-form > input').is(':focus'))
                adjust('60%', '40%');
            else if(!$('#query-form > input').is(':focus'))
                adjust('50%', '50%');
        }
    );

    $('#post-form').click(function() {
        $('#post-form > input').focus();
    });

    $('#query-form').click(function() {
        $('#query-form > input').focus();
    });

    $('#close').click(function() {
        parent.closeIFrame();
    });

    $('#post-form').on('submit', function(event) {
        rotate(720);
        hide();
    });
    $('#query-form').on('submit', function(event) {
        rotate(720);
        hide();
    });
});

var adjust = function(postw, queryw) {
    $('#post-form').css('width', postw);
    $('#query-form').css('width', queryw);
};

var rotate = function(d) {
    $({deg: 0}).animate({deg: d}, {
        step: function(now, fx){
            $("#logo").css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}

var hide = function() {
    $('#upper').css('height', '5%');
    $('#middle').css('top', 'calc(5% - 33px)');
    $('#form-div-shadow').css('top', 'calc(5% - calc(calc(66px - 5%) / 2))');
    $('#lower').css('height', '90%');
}

var show = function() {
    $('#upper').css('height', '15%');
    $('#middle').css('top', 'calc(15% - 33px)');
    $('#form-div-shadow').css('top', 'calc(15% - calc(calc(66px - 5%) / 2))');
    $('#lower').css('height', '80%');
}
