chrome.runtime.onMessage.addListener((updatedValue) => {
  const iframe = document.getElementById("trends_location");
  const baseUrl = "https://trends.google.com/tv/?";
  let urlParams = "";

  if (updatedValue[0] !== undefined) {
    switch (updatedValue[0]) {
      case "rows":
        urlParams += `rows=${updatedValue[0]}`;
        break;
      case "columns":
        urlParams += `cols=${updatedValue[0]}`;
        break;
      case "location":
        urlParams += `geo=${updatedValue[0]}`;
        break;
    }
  }

  iframe.src = baseUrl + urlParams;
});
