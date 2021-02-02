window.onload = function () {
  //Get stored inputs and substitute them in
  chrome.storage.sync.get(['rows'], function (result) {
    document.getElementById("rows").value = result.rows;
  });
  chrome.storage.sync.get(['columns'], function (result) {
    document.getElementById("columns").value = result.columns;
  });
  chrome.storage.sync.get(['location'], function (result) {
    document.getElementById("location").value = result.location;
  });

  //Save button
  document.getElementById("save").onclick = function () {
    //Get user inputs
    var row_val = document.getElementById("rows").value;
    var column_val = document.getElementById("columns").value;
    var country_val = document.getElementById("location").value;

    //Save them in Chrome Storage
    chrome.storage.sync.set({ rows: row_val }, function () {
      console.log('Rows: ' + row_val);
    });
    chrome.storage.sync.set({ columns: column_val }, function () {
      console.log('Columns: ' + column_val);
    });
    chrome.storage.sync.set({ location: country_val }, function () {
      console.log('Location: ' + country_val);
    });

    //Confirmation
    chrome.tabs.create({ url: "chrome://newtab" });
  };
};

