let strTH = "";
for (var x = 2; x < 10; x++) {
    strTH += `<th>${x}</th>`;
}
let strTD = "";
for (var i = 2; i < 10; i++) {
    strTD += `<td>`;
    for (var j = 1; j < 10; j++) {
        strTD += `${i}×${j}=${i * j}<br>`;
    }
    strTD += `</td>`;
}
let str = `
<table>
    <tr>${strTH}</tr>
    <tr>${strTD}</tr>
</table>
`
document.getElementById("container").innerHTML = str;