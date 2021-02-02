window.onload = function () {
  var rows = 1;
  var columns = 1;
  var location = 1;

  chrome.storage.sync.get(['rows'], function (result) {
    rows = result.rows;
  });

  chrome.storage.sync.get(['columns'], function (result) {
    columns = result.columns;
  });

  chrome.storage.sync.get(['location'], function (result) {
    location = result.location;
    changeAddress(rows, columns, location)
  });


  function changeAddress(rows, columns, location) {
    var address = "https://trends.google.com/trends/hottrends/visualize?nrow=" + rows.toString() + "&ncol=" + columns.toString() + "&pn=" + location.toString();
    document.getElementById("trends_location").setAttribute("src", address);
  }
}
