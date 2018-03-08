$(function() {

    $('#post-form > input').focus(function() {
        show('80%', '20%');
    });

    $('#post-form > input').focusout(function() {
        show('50%', '50%');
    });

    $('#query-form > input').focus(function() {
        show('20%', '80%');
    });

    $('#query-form > input').focusout(function() {
        show('50%', '50%');
    });

    $('#post-form').submit(function() {
        show('50%', '50%');
        $('#post-form > input').blur();
    });

    $('#query-form').submit(function() {
        show('50%', '50%');
        $('#query-form > input').blur();
    });

    $('#post-form').hover(
        function() {
            show('60%', '40%');
        },
        function() {
            if($('#query-form > input').is(':focus'))
                show('40%', '60%');
            else if(!$('#post-form > input').is(':focus'))
                show('50%', '50%');
        }
    );

    $('#query-form').hover(
        function() {
            show('40%', '60%');
        },
        function() {
            if($('#post-form > input').is(':focus'))
                show('60%', '40%');
            else if(!$('#query-form > input').is(':focus'))
                show('50%', '50%');
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
        rotate(360);
    });
});

var show = function(postw, queryw) {
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
