function saveBtn(){
    var table = document.getElementById("dataGrid");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var groupName = document.getElementById("groupName").value;
    var groupNumber = document.getElementById("groupNumber").value;

    row.style.cssText = "justify-content: center;font-weight: 600;font-size: 13px;";
    var cell1 = row.insertCell(0);
    cell1.innerHTML = groupName;

    var cell2 = row.insertCell(1);
    cell2.innerHTML = groupNumber;

    var cell3 = row.insertCell(2);
    var element2 = document.createElement("input");
    element2.type = "button";
    var btnName = "button" + (rowCount + 1);  
    element2.name = btnName;  
    element2.setAttribute('value', 'Delete'); // or element1.value = "button";  
    element2.onclick = function () { removeRow(this); }  
    element2.style.cssText = "text-decoration: none;font-size: 14px;background-color: #d04949; color: #d7fada;font-weight: 600;padding: 5px 8px;border-radius: 3px;cursor: pointer;border: none";
    cell3.appendChild(element2);

}