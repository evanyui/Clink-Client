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
    "(function() {" +
        "var url = window.location.href;" +
        "var clink = document.getElementById('Clink!');" +
        "var created = clink != null; " +
        "if(!created) { " +
            "var cross = document.createElement(\"p\");" +
            "cross.id = \"close-clink\";" +
            "cross.innerHTML = \"&#10006\";" +
            "cross.style.cssText = \"" +
                "position: relative;" +
                "top: 0;" +
                "right: 0;" +
                "margin: 0; " +
                "margin-left: 94%; " +
                "padding: 0; !important" +
                "border: none; !important" +
                "background-color: none; !important" +
                "color: rgba(0,0,0,0.6); !important" +
                "cursor: auto; !important" +
                "user-select: none;" +
                "font-size: 16;" +
            "\";" +
            "var iframe = document.createElement(\"iframe\"); " +
            "iframe.src = \"https://10.0.0.132:3000\"; " +
            "iframe.name = url; " + 
            "iframe.style.cssText = \"" +
                    "position: absolute;" +
                    "width: 100%;" +
                    "height: 100%;" + 
                    "overflow: hidden;" +
                    "border: none;" +
                    "background-color: white;" +
            "\";" +
            "clink = document.createElement(\"div\"); " +
            "clink.id = \"Clink!\"; " +
            "clink.style.cssText = \"" + 
                    "z-index: 2147483647;" +
                    "position: fixed; !important" + 
                    "top: 0;" + 
                    "bottom: 0;" + 
                    "right: 0;" +
                    "width: 0;" + 
                    "height: 100% !important;" + 
                    "opacity: 1;" + 
                    "box-shadow: -2px 0px 20px rgba(0, 0, 0, .5);" +
                    "transition: 0.3s" +
            "\";" +
            "clink.append(iframe);" + 
            "clink.append(cross);" +
            "document.body.prepend(clink);" + 
            "cross.addEventListener(\"click\", function() {" +
                "clink.style.width = 0;" +
            "});" +
        "} " + 

        "var open = clink.style.width !== '0px'; " +
        "if(!open) { " +
            // Create a sligth delay to show animation
            "clink.style.width = \"25%\";" + 
        "} else { " +
            "clink.style.width = \"0\";" + 
        "}" + 
    "})();"
    }
);

// If debugging with logging, comment out this line
window.close();
