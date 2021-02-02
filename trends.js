chrome.storage.sync.get(['rows'], function(result) {
  console.log('Value1 currently is ' + result.rows);
  //document.getElementById("rows").value = result.rows;
});

chrome.storage.sync.get(['columns'], function(result) {
  console.log('Value2 currently is ' + result.columns);
  //document.getElementById("columns").value = result.columns;
});

chrome.storage.sync.get(['location'], function(result) {
  console.log('Value3 currently is ' + result.location);
  //document.getElementById("countries").value = result.location;
});