window.onload = function(){
  var rows=1;
  var columns=1;
  var location=1;
  
  chrome.storage.sync.get(['rows'], function(result) {
    rows=result.rows;
    changeAddress(rows,columns,location)
  });

  chrome.storage.sync.get(['columns'], function(result) {
    columns=result.columns;
    changeAddress(rows,columns,location)
  });

  chrome.storage.sync.get(['location'], function(result) {
    location=result.location;
    changeAddress(rows,columns,location)
  });
  

  function changeAddress(rows,columns,location){
    rows.toString()
    columns.toString()
    location.toString()
    var address="https://trends.google.com/trends/hottrends/visualize?nrow="+rows+"&ncol="+columns+"&pn="+location;
    document.getElementById("trends_location").setAttribute("src", address);
  }
}
