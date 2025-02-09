/*
Property of RAJEEV J - rajeevj.co.uk
*/

//Open options menu on install/update
chrome.runtime.onInstalled.addListener(function(details) {
  if(details.reason == "install"){
    chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
      if (key === "rows" || key === "columns" || key === "location") {
        // Grid size or location has changed, send message to content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]) {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ["content.js"],
              args: [newValue],
            });
          }
        });
      }
    }
  });
});