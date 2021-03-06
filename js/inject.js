(function() {
    var jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
    jquery.type = 'text/javascript';
    document.body.prepend(jquery);
    // Adding material icons
    var materialIcons = document.createElement('link');
    materialIcons.rel = "stylesheet";
    materialIcons.href= "https://fonts.googleapis.com/icon?family=Material+Icons";
    document.body.prepend(materialIcons);

    const openWidth = "350px";
    var url = window.location.href;
    var clink = document.getElementById('Clink!');
    var layer = document.getElementById('clink_layer') == null? 
        document.createElement('div') : document.getElementById('clink_layer');
    var created = clink != null; 
    if(!created) { 
        layer.id = "clink_layer";
        layer.style.cssText = 
                "z-index: 2147483646;" +
                "position: fixed; !important;" + 
                "top: 0;" + 
                "left: 0;" +
                "width: 100%; !important;" +
                "height: 100%; !important;" + 
                "background-color: rgba(25,25,25,0.8);";
        // var exit = document.createElement('i');
        // exit.id = "close-clink";
        // exit.innerHTML = "exit_to_app";
        // exit.className = "material-icons";
        // exit.style.cssText =
        //     "position: relative;" +
        //     "top: 1%;" +
        //     "left: 8px;" +
        //     "margin: 0; " +
        //     "margin-right: 95%; " +
        //     "padding: 0; !important" +
        //     "border: none; !important" +
        //     "background-color: none; !important" +
        //     "color: rgba(0,0,0,0.6); !important" +
        //     "cursor: auto; !important" +
        //     "user-select: none;" +
        //     "font-size: 20px;" +
        //     "cursor: pointer;";
        // exit.addEventListener("click", function() {
        //     closeClink();
        // });

        var iframe = document.createElement('iframe');
        iframe.src = "https://www.clink.live/popup";
        iframe.name = url;
        iframe.style.cssText = 
                "position: absolute;" +
                "top: 0;" +
                "left: 0;" +
                "width: 100%;" +
                "height: 100%;" + 
                "overflow: hidden;" +
                "border: none;" +
                "background-color: transparent;";

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
                "box-shadow: -6px 0px 16px rgba(22, 22, 22, .6);" +
                "transition: 0.3s";

        // clink.append(exit);
        clink.append(iframe); 
        document.body.prepend(layer);
        document.body.prepend(clink); 
        document.addEventListener("click", function(event) {
            var notClink = !clink.contains(event.target);
            if(notClink) {
                closeClink();
            }
        });
        document.addEventListener("mousewheel", function(event) {
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

    // Close clink element immediately if user closes it
    function closeClink() {
        clink.style.width = "0px";
        // Delete the background grey
        setTimeout(() => {
        // But dont delete the clink, so the status is saved
        //     clink.outerHTML = "";
        //     delete clink;
            layer.outerHTML = "";
            delete layer;
        }, 300);
    };

})();

