// Saves options to chrome.storage
function save_options() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  chrome.storage.sync.set({
    email: email,
    password: password
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  
  chrome.storage.sync.get({
    email: 'xbcert$@vonbismark.com',
    password: 'YOURPASSWORD'
  }, function(items) {
    document.getElementById('email').value = items.email;
    document.getElementById('password').value = items.password;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);