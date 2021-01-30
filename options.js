function setCountry(country){
  alert("Test");
  chrome.storage.sync.set({"country_id": country}, function() {
    alert("Updated!");
    alert(country);
  });
}



