// Send script to current page
chrome.tabs.executeScript(
    null, 
    {file: "/popup/inject.js", "/html/inject.html"}
);

// If debugging with logging, comment out this line
window.close();
