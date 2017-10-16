# Clink
A Chrome Extension enable user to share and search link of the current tab

To connect to server:
1. Edit popup/popup.js clink.src = "myserver:port"
2. Edit js/index.js io.connect("myserver:port")

myserver:port should be wherever you are hosting Clink-Server,
the server it listens to can be edited in Clink-Server/src/app.js

Load unpack extension into chrome with developer mode turned on, and try it out
