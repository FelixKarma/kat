const scriptURL = 'https://script.google.com/macros/s/AKfycbwkVeWeaLT47FapnRzng4TP1jvdUSZEav-o62ahiRdeH1BrV2jJusqJfx1PyMPlDHXg6w/exec'
const tbody = document.getElementById("tbody");

$(document).ready(function () {
    $.getJSON(scriptURL),
    function (data) {
        var Table = "", Rows="",Columns="";
        $.each(data, function(key, value) {
            Columns = "";
            $.each(value, function(key1, value1) {
                Columns = Columns + "<td>"+value1+"</td>";
            });
            Rows = Rows + "<tr>"+Columns+"</tr>";
        });
        $("#tbody").append(Rows)
    }
})

// let MySheets = SpreadsheetApp.openByUrl("");
// let InvSheet = MySheets.getSheetByName("Inv");

// function doGet(e) {
//     let table = InvSheet.getRange("A:E").getValues().filter(r=>r.every(Boolean));
//     let str = JSON.stringify(table);
//     return ContentService.createTextOutput(str);
// }