chrome.runtime.onMessage.addListener((updatedValue) => {
  const iframe = document.getElementById("trends_location");
  const baseUrl = "https://trends.google.com/trends/hottrends/visualize?";
  let urlParams = "";

  switch (updatedValue[0]) {
    case "rows":
      urlParams += `nrow=${updatedValue[0]}`;
      break;
    case "columns":
      urlParams += `ncol=${updatedValue[0]}`;
      break;
    case "location":
      urlParams += `pn=${updatedValue[0]}`;
      break;
  }

  iframe.src = baseUrl + urlParams;
});
