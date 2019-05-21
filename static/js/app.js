var ufoData = data;
var tbody = d3.select("tbody");

//testing to see that data displays in the console
//console.log(data);
function buildtable(){
ufoData.forEach(function(ufoSightings){
    // console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.values(ufoSightings).forEach(function(value) {
        // console.log(value);
        var cell = row.append("td");
        cell.text(value);
    }) ;
});
};
buildtable();
// Select the submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {

    d3.event.preventDefault();
    // Clear the table
    d3.select("tbody").html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = ufoData.filter(ufoData=> ufoData.datetime===inputValue);
    console.log(filteredData);

    filteredData.forEach(ufoSightings => {
        console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.values(ufoSightings).forEach((value) => {
            console.log(value);
            var cell = row.append("td");
            cell.text(value);
        })
    });

});
