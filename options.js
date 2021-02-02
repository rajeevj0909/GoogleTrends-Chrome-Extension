window.onload = function () {
  //Get stored inputs and substitute them in
  chrome.storage.sync.get(['rows'], function (result) {
    document.getElementById("rows").value = result.rows;
    var row_val = document.getElementById("rows").value;
    var column_val = document.getElementById("columns").value;
    updateGridSize(column_val, row_val);
  });
  chrome.storage.sync.get(['columns'], function (result) {
    document.getElementById("columns").value = result.columns;
    var row_val = document.getElementById("rows").value;
    var column_val = document.getElementById("columns").value;
    updateGridSize(column_val, row_val);
  });
  chrome.storage.sync.get(['location'], function (result) {
    document.getElementById("location").value = result.location;
  });

  //Update rows to show template
  document.getElementById("rows").onchange = function () {
    var row_val = document.getElementById("rows").value;
    var column_val = document.getElementById("columns").value;
    updateGridSize(column_val, row_val);
  }
  //Update columns to show template
  document.getElementById("columns").onchange = function () {
    var row_val = document.getElementById("rows").value;
    var column_val = document.getElementById("columns").value;
    updateGridSize(column_val, row_val);
  }

  //Updates Size of tables
  function updateGridSize(columns, rows) {
    //Delete all grid divs
    document.getElementById("box").remove();
    document.getElementById("grid_columns").remove();
    document.getElementById("grid_rows").remove();
    //Recreate 3 divs
    div_rows = document.createElement('div');
    div_rows.setAttribute("id", "grid_rows");
    document.getElementById("GRID").appendChild(div_rows);
    div_columns = document.createElement('div');
    div_columns.setAttribute("id", "grid_columns");
    div_columns.setAttribute("class", "flex-container");
    div_rows.appendChild(div_columns);
    box = document.createElement('div');
    box.setAttribute("id", "box");
    box.setAttribute("class", "box");
    div_columns.appendChild(box);
    //Repeat them
    for (var i = 1; i < columns; i++) {
      div_columns.appendChild(box.cloneNode(true));
    }
    for (var i = 1; i < rows; i++) {
      div_rows.appendChild(div_columns.cloneNode(true));
    }
    var box_height = ((120 / rows).toString()) + "px";
    for (var i = 0; i < (rows * columns); i++) {
      document.getElementsByClassName("box")[i].style.height = box_height;
    }
  }

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

    //Confirmation Message
    alert("Saved Successfully");
    chrome.tabs.create({ url: "chrome://newtab" });
  };
};

