$.post("/get_mods", function(data) {
    console.log(data);
    $("#item_db").append("<tbody>");
    data.rows.forEach(function(item, index) {
        console.log(item);
        $("#item_db").append("<tr><td scope='row'><a href='https://warframe.market/items/" + item.doc.item_id + "'>" + item.doc._id + "</a></td><td>" + item.doc.mean + "</td><td>" + item.doc.std + "</td></tr>");
    });
    $("#item_db").append("</tbody>");
    $("#item_db").DataTable({
        "pageLength": 20
    });
});