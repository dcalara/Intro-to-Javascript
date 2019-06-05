
// from data.js
var tableData = data;
console.log(tableData);
getData(tableData);
// Reference to table body

// Loop through data and append row for each object

function getData(data){
   var tbody = d3.select("tbody")
   tbody.text("")
   data.forEach((ufosightings) => {
   var row = tbody.append("tr");
   Object.entries(ufosightings).forEach(([key, value]) => {
   var cell = row.append("td").text(value);
   cell.text(value);
       });
     })
   }

// DATE FORM

// Submit button
var submit = d3.select("#filter-btn");
submit.on("click", function(submit){

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
// console.log(tableData);
var filteredData = tableData

// Use the form input to filter the data
filteredData = filteredData.filter(filteredData => filteredData.datetime === inputValue);
console.log(filteredData);
getData(filteredData);
});