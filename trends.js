window.onload = function () {
  var rows = 1;
  var columns = 1;
  var location = 1;

  chrome.storage.sync.get(['rows'], function (result) {
    if (result.rows !== undefined) {
      rows = result.rows;
    }
  });
  chrome.storage.sync.get(['columns'], function (result) {
    if (result.columns !== undefined) {
      columns = result.columns;
    }
  });
  chrome.storage.sync.get(['location'], function (result) {
    if (result.location !== undefined) {
      location = result.location;
    }
    changeAddress(rows, columns, location);
  });

  function changeAddress(rows, columns, location) {
    var address = "https://trends.google.com/tv/?rows=" + rows.toString() + "&cols=" + columns.toString() + "&geo=" + location.toString();
    document.getElementById("trends_location").setAttribute("src", address);
  }
}