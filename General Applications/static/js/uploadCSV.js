// Upload a CSV worklist, which will auto-fill the interface

// Execute functions once the application is fully loaded
$(document).ready(function() {

    // Assign the button ID to an object
    var uploadedCSV = $("#uploadedCSV");


    // Once a file is uploaded, execute the code below
    uploadedCSV.on('change', function() {

        console.log("CSV uploaded!");

        AutofillParameters();

    });

    function AutofillParameters() {

        // Get the path of the uploaded CSV
        var fullPath = '';
        fullPath = document.getElementById('uploadedCSV').value;

        // Get the filename of the uploaded CSV, which removes the path from the actual filename
        if (fullPath) {
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
            console.log(filename);
        }

        // Retrieve the file object
        var csvFile = $('#uploadedCSV').get(0).files[0];

        // Instantiate a file reader to parse the CSV file
        var reader = new FileReader;
        reader.readAsText(csvFile);
        reader.onload = function(e) {
            var rawCSV = reader.result;

            // Build an array that splits the rawCSV string by \n
            rawCSVArray = rawCSV.split(/\r?\n/);

            var lines = rawCSV.split("\n");
            var parametersArray = [];
            var headers;
            headers = lines[0].split(",");
            
            // Skip the header row with i = 1
            for (var i = 1; i < lines.length; i++) {
                
                // Each line will be appended to the parameters object
                var parametersObject = {};
        
                if(lines[i] == undefined || lines[i].trim() == "") {
                    continue;
                }
        
                // Split each row based off the comma delimiter
                var words = lines[i].split(",");
                for(var j = 0; j < words.length; j++) {
                    parametersObject[headers[j].trim()] = words[j];
                }
        
                // Append the row parameter object to the array
                parametersArray.push(parametersObject);
            }
            console.log(parametersArray);

            // console.log(parametersArray[2].Variable);
            // console.log(parametersArray[2].Value);

            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

            // Create two arrays that are based on their input type (select vs input)
            var selectArray = ['sourceType','destinationType','tipType','numStamps',
                'changeTips','technique','aspirateHeight','aspirateMixHeight','dispenseHeight','dispenseMixHeight'];
            var inputArray = ['srcWellVolume','stampVol','aspirateMixVol','aspirateMixCount',
                'dispenseMixVol','dispenseMixCount'];

            // Loop through the labware parameters array
            // For each ID, get the variable and value and auto-fill the inputs/selects
            for (var i = 0; i < parametersArray.length; i++) {

                var id = parametersArray[i].Variable;
                var textValue = parametersArray[i].Value;

                console.log(`${id}: ${textValue}`);
                if (selectArray.includes(id)) {
                    $('#' + id + ' select option[value="' + textValue + '"]').attr('selected', 'selected')
                    if (id == "numStamps") {
                        // Since the value is set programmatically, manually trigger an event change
                        $('#numStamps').trigger("change");
                    };
                }
                else if (inputArray.includes(id)) {
                    $('#' + id + ' input').val(parametersArray[i].Value);
                }

            };

            
        };
    };

});

// https://www.programmersought.com/article/40435121957/