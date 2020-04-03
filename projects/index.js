async function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl); // false for synchronous request
    xmlHttp.send( null );
    let result = await new Promise((resolve) => {
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            resolve(xmlHttp.responseText);
      }
    })
    return result;
}

async function init(){
  let results = await httpGet("https://spreadsheets.google.com/feeds/cells/1Yw12o9lABAdhSQWo71jfBFeUU2ywr_U4vHBJyEMldmA/1/public/full?alt=json");
  let rows = [];
  let rowIndex = 0;
  let parsed = JSON.parse(results);
  let data = parsed.feed.entry;
  let newRow;
  for (var i = 0; i < data.length; i++){
    let row = parseInt(data[i]["gs$cell"].row);
    let col = parseInt(data[i]["gs$cell"].col);
    if (row != rowIndex){
      if (row != 1){
        rows.push(newRow);
      }
      rowIndex ++;
      newRow = {};
    }
    if (col == 1){
      newRow.title = data[i]["gs$cell"]["$t"];
    }else if (col == 2){
      newRow.description = data[i]["gs$cell"]["$t"];
    }else if (col == 3){
      newRow.github = data[i]["gs$cell"]["$t"];
    }
  }
  rows.push(newRow);
  let tbody = document.getElementById("tbody");
  for (var i = 0; i < rows.length; i++){
    let row = tbody.insertRow(i);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var number = row.insertCell(0);
    var title = row.insertCell(1);
    var desc = row.insertCell(2);
    var github = row.insertCell(3);

    // Add some text to the new cells:
    let data = JSON.parse(JSON.stringify(rows[i]));
    number.innerHTML = i;
    title.innerHTML = rows[i].title;
    desc.innerHTML = rows[i].description;
    if (rows[i].github != undefined){github.innerHTML = `<a href="${rows[i].github}">` + rows[i].github.split("github.com/AdrienTrahan/")[1];}
    row.onclick = function (e){
      console.log(e.target.tagName);
      if (e.target.tagName != "A"){
        $('#modalbox').modal('show');
        $('#modalbox #exampleModalLabel').text(data.title);
        $($('#modalbox .modal-body')[0]).text(data.description);
        $($('#modalbox .modal-body')[0]).text(data.description);
        if (data.github != undefined){
          $("#githubbutton").get(0).style.display = "block";
          $("#githubbutton").get(0).onclick = () => {
            window.location = data.github;
          }
          // github.innerHTML = `<a href="${rows[i].github}">` + rows[i].github.split("github.com/AdrienTrahan/")[1];
        }else{
          $("#githubbutton").get(0).style.display = "none";
        }
      }
    }
  }
}

init();
