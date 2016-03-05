// Has access to Chrome APIs, but not the content page
console.log("[+] background.js");

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf('https://altmail.blacknight.com/') == 0)
		chrome.pageAction.show(tabId);
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);