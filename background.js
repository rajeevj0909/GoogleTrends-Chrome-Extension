/*
Property of RAJEEV J - rajeevj.co.uk
*/
//Open options menu on install/update
chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });