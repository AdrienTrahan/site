class TableView{
    constructor(id){
        this.id = id;
        this.count = 0;
        if (document.getElementById(id)){
            document.getElementById(id).innerHTML = "<table class='table'><tbody></tbody></table>";
        }else{
            console.error("cannot find tableview with id: " + id);
        }
    }
    setRowCount(count, callback){
        this.count = count;
        var table = document.getElementById(this.id).childNodes[0];
        table.innerHTML = "<tbody></tbody>";
        table.style.width = "100%";
        for (var i = 0; i < count; i++){
            var row = table.insertRow(i);
            var cell = row.insertCell(0);
            row.style.width = "100%";
            cell.style = "width: 100%; height: auto;";
        }
        for (var i = 0; i < count; i++){
            callback(this.getRow(i), i);
        }
    }
    addRow(index){
        if (index <= this.count + 1 && index >= 0){
            this.count++;
            var table = document.getElementById(this.id).childNodes[0];
            var row = table.insertRow(index);
            var cell = row.insertCell(0);
            row.style.width = "100%";
            cell.style = "width: 100%; height: auto;";
        } else {
            console.error("Invalid index");
        }
    }
    removeRow(index){
        if (index <= this.count - 1 && index >= 0){
            this.count--;
            var table = document.getElementById(this.id).childNodes[0];
            table.deleteRow(index);
        } else {
            console.error("Invalid index");
        }
    }
    getRow(index){
        if (index <= this.count - 1 && index >= 0){
            var tbody = document.getElementById(this.id).childNodes[0].childNodes[0];
            var cell = tbody.childNodes[index].childNodes[0];
            return cell;
        } else {
            console.error("Invalid index");
        }
    }
    reset(){
        var table = document.getElementById(this.id).childNodes[0];
        table.innerHTML = "<tbody></tbody>";
        this.count = 0;
    }
}
