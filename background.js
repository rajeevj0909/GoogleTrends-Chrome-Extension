chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({"country_id": 1});
});


