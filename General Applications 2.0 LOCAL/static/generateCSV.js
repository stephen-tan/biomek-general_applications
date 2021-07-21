//Wait to run your initialization code until the DOM is fully loaded. This is needed
// when wanting to access elements that are later in the HTML than the <script>.
// if(document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', afterLoaded);
// } else {
//     //The DOMContentLoaded event has already fired. Just run the code.
//     afterLoaded();
// };

// function afterLoaded() {
//     //Your initialization code goes here. This is from where your code should start
//     //  running if it wants to access elements placed in the DOM by your HTML files.
//     //  If you are wanting to access DOM elements inserted by JavaScript, you may need
//     //  to delay more, or use a MutationObserver to see when they are inserted.
//     var parameters = document.querySelectorAll(".list-group-item");
//     console.log(parameters);

//     // JavaSript regex to get the element name in the id attribute
//     let re = /(?<=id=")(.*?)(?=")/

//     for (var i=0; i<parameters.length; i++) {
//         var variableName = parameters[i].innerHTML.match(re)[0];
        
//         console.log(parameters[i]);
        
//         console.log(variableName);

//     };


// };

var form = $("#methodParameters");
var showSelectedParameters = $("#showSelectedParameters");

showSelectedParameters.on('click', function() {

    console.log("button pressed!");
    console.log("------------------------");

    var parameters = document.querySelectorAll(".list-group-item");

    // JavaSript regex to get the element name in the id attribute
    let re = /(?<=id=")(.*?)(?=")/

    for (var i=0; i<parameters.length; i++) {
        var variableName = parameters[i].innerHTML.match(re)[0];

        var searchParameter = "#" + variableName;

        var variableValue = $(searchParameter).find(':selected').val();
        
        console.log(`${variableName}: ${variableValue}`);
    };
});


    function WriteToCSV() {
        // https://stackoverflow.com/questions/17564103/using-javascript-to-download-file-as-a-csv-file
        // filename in format "GeneralApplications_MethodName_MM-DD-YYYY-mm-hh-ss"

        // Set variable for datetime


        // Loop through all elements in the General Applications interface
        // each variable name will be the parameter "name" and its value is the element "value"


            // Write to the CSV where one column is the "name" and the other column is the "value"


            // Increment to write to the next line


    };

