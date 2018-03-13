// Send script to current page
chrome.tabs.executeScript(
    null, 
    {file: "/js/inject.js"},
    function(results) {
        if (results==null)
            chrome.tabs.create({url:"https://www.clink.live/"});
    }
);

// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://www.clink.live/";
//   chrome.tabs.create({ url: newURL });
// });

// If debugging with logging, comment out this line
window.close();
