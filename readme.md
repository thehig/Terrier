# Terrier

#### A chrome extension for autofilling usernames and passwords on blacknight, with incrementing IDs


### How to use

Open the extension options by right clicking on the icon in the chrome bar and clicking options. 

In the email field, the $ symbol will be replaced by the counter. 

The counter will increment before use, so **to start at 1, set the counter to 0**. 

The autologin checkbox will automatically click on the login button after 500ms.

### The Extension

The extension is comprised of:

##### [manifest.json][manifest]

> Defines the name, description etc of the extension to chrome. Specifies the content_scripts only to load on [https://altmail.blacknight.com/][blacknight] and [https://altmail.blacknight.com/index.php/mail/auth/logout][blacknight]. Also requests permissions for tabs and storage.

##### [background.js][background]

> Determines whether the icon is enabled or not. Listens for and replies to messages sent by [extension.js][extension] requesting data for autofill.

##### [extension.js][extension]

> Injected into the appropriate blacknight pages as configured in the [manifest][blacknight]. Broadcasts a request for autofill data to be answered by [background.js][background]

##### [options.js][optionsjs] & [.html][optionshtml]

> Configure the parameters to be used by [background.js][background], such as email, password, counter and autologin


[manifest]: Terrier/manifest.json
[background]: Terrier/background.js
[extension]: Terrier/extension.js
[optionsjs]: Terrier/options.js
[optionshtml]: Terrier/options.html
[blacknight]: Terrier/manifest.json#L18