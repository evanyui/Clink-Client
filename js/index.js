$(function() {
    // When user clink is opened, user is connected to the server
    var socket = io.connect('http://localhost:3000');

    // Get current tab
    var url;
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
        // Get tab's address
        url = tabs[0].url;
    });

    // When user submit form to post link
    $('#post-form').on('submit', function(event) {
        // TODO: weird bug on html having two submit forms
        // Check if works on other browser
        event.preventDefault();

        // Send tab's address with the tag as a pair to the server
        if(isValidURL(url)) {
            socket.emit('post', $('#tags').val(), url);
        } else {
            //TODO: need better way to present info message
            $('#tags').attr('placeholder', 'Current tab is not an url'); 
        }

        // Empty the textfield
        $('#tags').val('');

        return false;
    });

    // When user submit form to query links
    $('#query-form').on('submit', function(event) {
        // TODO: weird bug on html having two submit forms
        // Check if works on other browser
        event.preventDefault();

        // Query to server
        socket.emit('query', $('#query').val(), url);

        return false;
    });

    // When client receive data from server
    // only after client query links to server
    // query results are sent back in array
    socket.on('receive', function(results) {
        results.forEach(function(res) {
            $('#linklist').append(
                $('<li/>').append(
                    $('<a/>').attr({href: res.url, target: '_blank'})
                             .text(res.key)));
        });
    });
});

// Predicate to check if tab address is a url with regex
var isValidURL = function(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
        return false;
    } else {
        return true;
    }
}

