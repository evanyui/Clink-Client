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
    //         recover();
    //     }
    // );

    // $('#query-form > input').hover(
    //     function() {
    //         showQuery();
    //     },
    //     function() {
    //         recover();
    //     }
    // );

    $('#close').click(function() {
        parent.closeIFrame();
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
