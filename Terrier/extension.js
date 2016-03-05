// Will be injected into pages specified in manifest.content_scripts
console.log("[+] extension.js");

// Populate the dom with the provided options
function populateInputFields(options){
	console.log(options);

	var emailInputField = document.querySelector('#email');
	if(emailInputField) emailInputField.value = options.email;

	var passwordInputField = document.querySelector('#password');
	if(passwordInputField) passwordInputField.value = options.password;

	if(options.autologin){
		var loginButton = document.querySelector('#MoreOptions > td > input');
		if(loginButton) {
			setTimeout(function(){
				loginButton.click();		
			}, 500);			
		} else {
			alert("Could not locate login button");
		}
	}	
}

// Broadcast message to the background.js
console.log("Broadcasting autofill");
chrome.extension.sendMessage({action: "autofill"}, function(result){
	console.log("Message result");

	if(result.err)
		alert(result.err);
	else
		populateInputFields(result);
});