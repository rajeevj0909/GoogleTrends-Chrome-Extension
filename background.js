/*
Property of RAJEEV J - rajeevj.co.uk
*/

//Open options menu on install/update
chrome.runtime.onInstalled.addListener(function(details) {
    if(details.reason == "install"){
        chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
    }
});