var rootRef = firebase.database().ref();
rootRef.once("value", function(snapshot) {
  snapshot.forEach(function(child) {
    console.log(child.val());

    var table = document.getElementsByClassName("table")[0];
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = child.val().position;
    cell2.innerHTML = child.val().ip;
    cell3.innerHTML = child.val().coord.latitude + ":" + child.val().coord.longitude;
    cell4.innerHTML = child.val().date;


  });
});
