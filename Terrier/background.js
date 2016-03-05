// Has access to Chrome APIs, but not the content page
console.log("[+] background.js");

// Incrementing count variable
localStorage.count = localStorage.count || 0;


// Activate pageAction only when on blacknight
function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf('https://altmail.blacknight.com/') == 0)
		chrome.pageAction.show(tabId);
};
chrome.tabs.onUpdated.addListener(checkForValidUrl);


// Listen for messages from the extension.js
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
	if(!request || !request.action) sendResponse({err: "Invalid request"});

	switch(request.action){
		case "autofill": 		// Return the login details for the current count
			sendResponse({
				email: "xbtest" + localStorage.count++ + "@vonbismark.com",
				password: "YOURPASSWORD"
			});
			break;
		default:
			sendResponse({err: "Unrecognised action"});
	}
});