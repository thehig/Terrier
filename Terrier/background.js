// Has access to Chrome APIs, but not the content page
console.log("[+] background.js");

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
			chrome.storage.sync.get({
				email: 'xbcert$@themallxboxone.com',
				password: 'YOURPASSWORD',
				counter: 0,
				autologin: false
			}, function(items){
				var count = items.counter + 1;
				var response = {
					email: items.email.replace('$', count),
					password: items.password,
					autologin: items.autologin
				}

				// Update counter in local storage
				chrome.storage.sync.set({counter: count}, function(){
					sendResponse(response);
				});				
			});
			break;
		default:
			sendResponse({err: "Unrecognised action"});
	}

	return true;
});