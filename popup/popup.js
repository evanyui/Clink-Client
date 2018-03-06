
chrome.extension.getURL('html/inject.html'), function(data) {
    document.body.appendChild (data);
}

// Send script to current page
chrome.tabs.executeScript(
    null, 
    {file: "/popup/inject.js"}
);

// If debugging with logging, comment out this line
window.close();
