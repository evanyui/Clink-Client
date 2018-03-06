// Send script to current page
chrome.tabs.executeScript(
    null, 
    {file: "/js/inject.js"}
);

// If debugging with logging, comment out this line
window.close();
