$(function() {
    // Auth for apis
    var AUTH_THUM = '847-woojung0802'; 
    
    // When user clink is opened, user is connected to the server
    var socket = io.connect('https://localhost:3000');

    // Get current tab
    // tab address is already left in the name attribute of parent iframe
    var url = window.name;
    $('#current-tab').text(url);

    // When user submit form to post link
    $('#post-form').on('submit', function(event) {
        // TODO: weird bug on html having two submit forms
        // Need to Check if works on other browser
        event.preventDefault();

        // Send tab's address with the tag as a pair to the server
        if(isValidURL(url)) {
            // Create the room first to see the emitted msg back after post
            var tag = $('#tag').val();
            joinRoom(tag);
            socket.emit('post', tag, url);
        } else {
            //TODO: need better way to present info message
            $('#tag').attr('placeholder', 'Current tab is not an url'); 
        }

        // Empty the textfield
        $('#tag').val('');

        return false;
    });

    // When user submit form to query links
    $('#query-form').on('submit', function(event) {
        // TODO: weird bug on html having two submit forms
        // Need to Check if works on other browser
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
            var screenshot = '//image.thum.io/get/width/400/crop/900/auth/' + AUTH_THUM + '/' + res.url;
            $('#linklist').append(
                $('<li/>').append(
                    $('<a/>').attr({href: res.url, target: '_blank'})
                    // .text(res.key)
                    .css('background-image', 'url(' + screenshot + ')')));
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
        }
        $('#linklist').empty();
        socket.emit('subscribe', room);

        // Show joined room in placeholder
        $('#query').attr('placeholder', 'Results of ' + room);
    }

});

// Predicate to check if tab address is a url with regex
var isValidURL = function(str) {
    var httpRegex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/; 
    var ipRegex = /(\d+\.\d+\.\d+\.\d+):(\d+)/; 

    if(httpRegex.test(str) || ipRegex.test(str)) {
        return true;
    } 
    return false;
}

// ** NOT USED, at least not now **
// We need Local IP, but this gives global IP, chrome extension is not allowed
// to get local IP
// Function to request global IP
var convertIP = async function(str) {
    var address;
    await $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
        function(json) {
            address = str.replace(/localhost/g, json.ip);
        }
    );
    return address;
}

