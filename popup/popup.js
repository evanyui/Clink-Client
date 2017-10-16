// Get address using chrome api
// chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
//     // Get tab's address
//     var url = tabs[0].url;
// });

// Send script to current page
chrome.tabs.executeScript(
    null, 
    {code: 
        // Get address by window, works faster because it doesn't wait for
        // request
        "var url = window.location.href;" +
        "var opened = document.getElementById('Clink!') != null; " +
        "if(opened) { " +
            "document.getElementById(\"Clink!\").style.width = \"0%\";" + 
            // Create a sligth delay to show animation
            "setTimeout(function() {" +
                "var clink = document.getElementById(\"Clink!\"); " +
                "clink.outerHTML = \"\"; " +
                "delete clink;" + 
            "}, 100);" +
        "} else { " +
            "var clink = document.createElement(\"iframe\"); " +
            "clink.id = \"Clink!\"; " +
            "clink.src = \"https://localhost:3000\"; " +
            "clink.name = url; " + 
            "clink.style.cssText = \"" + 
                    "z-index: 2147483647;" +
                    "position: fixed; !important" + 
                    "top: 0;" + 
                    "right: 0;" +
                    "width: 0;" + 
                    "height: 100% !important;" + 
                    "background-color: white;" +
                    "opacity: 1;" + 
                    "overflow: hidden;" +
                    "border: none;" +
                    "box-shadow: -2px 0px 30px rgba(0, 0, 0, .6);" +
                    "transition: 0.3s" +
            "\";" +
            "document.body.prepend(clink); " + 
        "} " + 
        // Create a sligth delay to show animation
        "setTimeout(function() { " + 
            "document.getElementById(\"Clink!\").style.width = \"25%\";" + 
        "}, 10); "
    }
);

// If debugging with logging, comment out this line
window.close();
