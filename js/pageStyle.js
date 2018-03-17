$(function() {
    $('#query-form').on('submit', function(event) {
        rotate(720);
        hide();
    });
});

var rotate = function(d) {
    $({deg: 0}).animate({deg: d}, {
        step: function(now, fx) {
            $("#logo").css({
                 transform: "rotate(" + now + "deg)"
            });
        },
        complete: function() {
            $("#logo").css({
                 transform: "rotate(0)"
            });
        }
    });
}

// var hide = function() {
//     $('#upper').css('height', '5%');
//     $('#middle').css('top', 'calc(5% - 17px)');
//     $('#form-div-shadow').css('top', 'calc(5% - calc(34px / 2))');
//     $('#lower').css('height', '90%');
//     $('#logo').hide();
// }

// var show = function() {
//     $('#upper').css('height', '15%');
//     $('#middle').css('top', 'top: calc(15% - 17px)');
//     $('#form-div-shadow').css('top', 'calc(15% - calc(34px / 2))');
//     $('#lower').css('height', '80%');
//     $('#logo').show();
// }
