// Get address using chrome api
// chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
//     // Get tab's address
//     var url = tabs[0].url;
// });

// Send script to current page
chrome.tabs.executeScript(
    null, 
    {file: "/popup/inject.js"}
);

// If debugging with logging, comment out this line
window.close();
