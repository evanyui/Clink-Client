(function() {
    const openWidth = "300px";

    var url = window.location.href;
    var clink = document.getElementById('Clink!');
    var created = clink != null; 
    if(!created) { 
        var cross = document.createElement('p');
        cross.id = "close-clink";
        cross.innerHTML = "&#10006";
        cross.style.cssText =
            "position: relative;" +
            "top: 1%;" +
            "right: 0;" +
            "margin: 0; " +
            "margin-left: 94%; " +
            "padding: 0; !important" +
            "border: none; !important" +
            "background-color: none; !important" +
            "color: rgba(0,0,0,0.6); !important" +
            "cursor: auto; !important" +
            "user-select: none;" +
            "font-size: 18;";
        cross.addEventListener("click", function() {
            closeClink();
        });

        var iframe = document.createElement('iframe');
        iframe.src = "https://10.0.0.132:3000";
        iframe.name = url;
        iframe.style.cssText = 
                "position: absolute;" +
                "top: 0;" +
                "left: 0;" +
                "width: 100%;" +
                "height: 100%;" + 
                "overflow: hidden;" +
                "border: none;" +
                "background-color: white;";

        clink = document.createElement('div');
        clink.id = "Clink!";
        clink.style.cssText = 
                "z-index: 2147483647;" +
                "position: fixed; !important" + 
                "top: 0;" + 
                "bottom: 0;" + 
                "right: 0;" +
                "width: 0px;" + 
                "height: 100% !important;" + 
                "opacity: 1;" + 
                "box-shadow: -2px 0px 20px rgba(0, 0, 0, .5);" +
                "transition: 0.3s";

        clink.append(iframe); 
        clink.append(cross);
        document.body.prepend(clink); 
        document.addEventListener("click", function(event) {
            var notClink = !clink.contains(event.target);
            if(notClink) {
                closeClink();
            }
        });
    } 

    var opened = clink.style.width !== "0px";
    if(!opened) {
        // Create a sligth delay to show animation
        setTimeout(() => {
            clink.style.width = openWidth; 
        }, 100);
    } else {
        closeClink();
    }

    // Delete clink element immediately if user closes it
    function closeClink() {
        clink.style.width = "0px";
        setTimeout(() => {
            clink.outerHTML = "";
            delete clink;
        }, 300);
    };

})();

