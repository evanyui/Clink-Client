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
        hide();
    });
    $('#query-form').on('submit', function(event) {
        hide();
    });
});

var adjust = function(postw, queryw) {
    $('#post-form').css('width', postw);
    $('#query-form').css('width', queryw);
};

var hide = function() {
    $('#upper').css('height', '5%');
    $('#middle').css('top', 'calc(5% - 17px)');
    $('#form-div-shadow').css('top', 'calc(5% - calc(34px / 2))');
    $('#lower').css('height', '90%');
    $('#logo').hide();
    $('#lower').css('background-image', 'none');
}

var show = function() {
    $('#upper').css('height', '15%');
    $('#middle').css('top', 'top: calc(15% - 17px)');
    $('#form-div-shadow').css('top', 'calc(15% - calc(34px / 2))');
    $('#lower').css('height', '80%');
    $('#logo').show();
}
