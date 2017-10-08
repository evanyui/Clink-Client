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
            // Create the room first to see the emitted msg back after post
            joinRoom($('#tags').val());
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

        // Query to server and subscribe to room
        socket.emit('query', $('#query').val(), url);
        joinRoom($('#query').val());

        // Empty the textfield
        $('#query').val('');

        return false;
    });

    // When client receive data from server,
    // happens after client query links to server or when client post link
    // Query results are sent back in array
    socket.on('receive', (results) => {
        results.forEach((res) => {
            $('#linklist').append(
                $('<li/>').append(
                    $('<a/>').attr({href: res.url, target: '_blank'})
                             .text(res.key)));
        });
    });

    socket.on('subscribe_callback', (room) => {
        $('#query').attr('alt', room);
    });

    socket.on('unsubscribe_callback', (room) => {
        $('#query').attr('alt', "");
    });

    // Join room function
    var joinRoom = function(room) {
        var currentRoom = $('#query').attr('alt'); 
        // Leave room if subscribed to different room
        if(currentRoom !== "" && currentRoom !== room) {
            socket.emit('unsubscribe', currentRoom);
            $('#linklist').empty();
        }
        socket.emit('subscribe', room);

        // Show joined room in placeholder
        $('#query').attr('placeholder', room);
    }

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

