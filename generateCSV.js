// Assign the button ID to an object
var downloadCSV = $("#downloadCSV");

// Create a JavaScript array to store key:value pairs (variable:value)
var parametersArray = [];

// Whenever the button on the HTML interface is clicked, run the code block below
downloadCSV.on('click', function() {

    // Print to the console to show that the button has been clicked
    console.log("Button clicked!");
    console.log("------------------------");

    // Query (find) all the selectors of class list-group-item because
    // all the parameters in the HTML were set up within that list-group-item class
    var parameters = document.querySelectorAll(".list-group-item");
    console.log(parameters);

    // JavaScript regex to get the element name in the id attribute
    let re = /(?<=id=")(.*?)(?=")/

    // Loop through all queried parameters
    for (var i=0; i<parameters.length; i++) {

        // Get the innerHTML string and find the name of the ID
        var variableName = parameters[i].innerHTML.match(re)[0];

        // Concatenate a # to the variable since that will be looking for that ID
        var searchSelector= "#" + variableName;

        // Get the value for the dropdown inputs
        var dropdownSearch = $(searchSelector).find(':selected').val();
        
        // If the input is of type input (rather than a dropdown) it will return type "undefined"
        // In which case we need to assign the variable's value from the dropdown
        if (typeof dropdownSearch !== "undefined") {
            var variableValue = $(searchSelector).find(':selected').val();
        }
        // Otherwise, get the value of the input type
        else {
            var variableValue = $(searchSelector).find('input').val();
        }

        // Add the variableName and variableValue to the parametersArray as key:value pairs
        parametersArray.push({key: variableName, value: variableValue})

    };

    // Create column headers Index, Variable, Value for the initial values in the CSV
    var csvContent = "Index,Variable,Value" + "\n";

    // For each of the selected values stored in the parametersArray, store the key:value pairs 
    // as a string separated by a comma (for the CSV) followed by a newline
    for (var i=0; i<parametersArray.length; i++) {
        var result = (i + 1) + "," + parametersArray[i].key + "," + parametersArray[i].value + "\n";
        console.log(`${parametersArray[i].key} : ${parametersArray[i].value}`);
        
        // Add the string (variable,value) to the CSV
        csvContent += result;
    };

    // Once all the information has been entered as a string with newling \n characters,
    // Create an element which will hold the downloadable CSV file
    var csv = document.createElement('a');

    // Add the CSV content to the actual CSV object
    csv.href = "data:text/csv;charset=utf-8," + encodeURI(csvContent);

    // Open the downloadable file in the window or tab
    csv.target = 'blank';

    // Get the local date and time
    // Format date as YYYY-MM-DD
    // Format time as hh_mm_ss
    var d = new Date();
    var date = d.toISOString().slice(0,10);
    var time = d.toLocaleTimeString('it-IT');

    console.log(date + " " + time);

    // Create the filename based on the local datetime
    var filename = "GenApps_" + date + "_" + time + ".csv";

    // When the file is downloaded, assign a particular name
    csv.download = filename;
    
    // Trigger the download when the specific button is clicked
    csv.click();

});