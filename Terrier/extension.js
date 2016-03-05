// Will be injected into pages specified in manifest.content_scripts
console.log("[+] extension.js");

// Populate the dom with the provided options
function populateInputFields(options){
	var emailInputField = document.querySelector('#email');
	if(emailInputField) emailInputField.value = options.email;

	var passwordInputField = document.querySelector('#password');
	if(passwordInputField) passwordInputField.value = options.password;

	var loginButton = document.querySelector('#MoreOptions > td > input');
	// if(loginButton) loginButton.click();
}

// Broadcast message to the background.js
chrome.extension.sendMessage({action: "autofill"}, function(result){
	if(result.err)
		alert(result.err);
	else
		populateInputFields(result);
});