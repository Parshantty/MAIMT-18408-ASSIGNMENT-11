function change1() {
    var elem = document.getElementById("button1");
    if (elem.value == "Add Record") {
        elem.value = "Remove Record";


        var detail = document.getElementsByClassName("pname");
        var table = document.getElementById("displayData");
        var row = table.insertRow();
        row.id = "p1";
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML = "p1";
        cell1.innerHTML = detail[0].innerHTML;
        cell2.innerHTML = detail[2].innerHTML;
        cell3.innerHTML = detail[1].innerHTML;
    }
    else if (elem.value = "Remove Record") {
        elem.value = "Add Record";
        document.getElementById("p1").remove();
    }

}


function change2() {
    var elem = document.getElementById("button2");
    if (elem.value == "Add Record") {
        elem.value = "Remove Record";

        var detail = document.getElementsByClassName("pname2");
        var table = document.getElementById("displayData");
        var row = table.insertRow();
        row.id = "p2";
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML = "p2";
        cell1.innerHTML = detail[0].innerHTML;
        cell2.innerHTML = detail[2].innerHTML;
        cell3.innerHTML = detail[1].innerHTML;
    }
    else if (elem.value = "Remove Record") {
        elem.value = "Add Record";
        document.getElementById("p2").remove();
    }

}


function change3() {
    var elem = document.getElementById("button3");
    if (elem.value == "Add Record") {
        elem.value = "Remove Record";

        var detail = document.getElementsByClassName("pname3");
        var table = document.getElementById("displayData");
        var row = table.insertRow();
        row.id = "p3";
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML = "p3";
        cell1.innerHTML = detail[0].innerHTML;
        cell2.innerHTML = detail[2].innerHTML;
        cell3.innerHTML = detail[1].innerHTML;
    }
    else if (elem.value = "Remove Record") {
        elem.value = "Add Record";
        document.getElementById("p3").remove();
    }

}