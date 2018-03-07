$(function() {

    $('#post-form > input').focus(function() {
        showPost();
    });

    $('#post-form > input').focusout(function() {
        recover();
    });

    $('#query-form > input').focus(function() {
        showQuery();
    });

    $('#query-form > input').focusout(function() {
        recover();
    });

    $('#post-form').submit(function() {
        recover();
        $('#post-form > input').blur();
    });

    $('#query-form').submit(function() {
        recover();
        $('#query-form > input').blur();
    });

    // $('#post-form > input').hover(
    //     function() {
    //         showPost();
    //     },
    //     function() {
    //         if($('#query-form > input').is(':focus'))
    //             showQuery();
    //         else if(!$('#post-form > input').is(':focus'))
    //             recover();
    //     }
    // );

    // $('#query-form > input').hover(
    //     function() {
    //         showQuery();
    //     },
    //     function() {
    //         if($('#post-form > input').is(':focus'))
    //             showPost();
    //         else if(!$('#query-form > input').is(':focus'))
    //             recover();
    //     }
    // );
    //

    $('#post-form').click(function() {
        $('#post-form > input').focus();
    });

    $('#query-form').click(function() {
        $('#query-form > input').focus();
    });

    $('#close').click(function() {
        parent.closeIFrame();
    });

    $('#form-div').hover(function() {
        $('#form-div-shadow').animate({
            box-shadow: "2px 6px 6px rgba(25,25,25,0.4)"
        }, 100, function() {
        });
    }, function() {
        $('#form-div-shadow').animate({
            box-shadow: "0px 2px 4px rgba(25,25,25,0.4)"
        }, 100, function() {
        });
    });
    $('#form-div').focus(function() {
        $('#form-div-shadow').animate({
            box-shadow: "2px 6px 6px rgba(25,25,25,0.4)"
        }, 100, function() {
        });
    });
    $('#form-div').focusout(function() {
        $('#form-div-shadow').animate({
            box-shadow: "0px 2px 4px rgba(25,25,25,0.4)"
        }, 100, function() {
        });
    });
});

var recover = function() {
    $('#query-form').css('width', '50%');
    $('#post-form').css('width', '50%');
};

var showPost = function() {
    $('#post-form').css('width', '75%');
    $('#query-form').css('width', '25%');
};

var showQuery = function() {
    $('#query-form').css('width', '75%');
    $('#post-form').css('width', '25%');
};
