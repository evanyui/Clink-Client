chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({}, function(tabs) {
        var tabsArray = [];
        tabs.forEach(function(tab) {
            tabsArray.push(tab.url);
        });
        // TODO: 1. send urls to server
        // TODO: 2. open new tab to web page and load urls
        alert(tabsArray);
    });
});
