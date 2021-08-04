// Execute functions once the application is fully loaded
$(document).ready(function() {


    // Refresh the page if the Clear Parameters button is clicked
    $('#clearParameters').click(function() {
        location.reload();
    });

    // Auto-fill source well volume and filter compatible tip types based on source type
    $('#sourceType, #destinationType').on('change', function() {

        // get value of the sourceType and destinationType selected and log it to the console
        var sourceType = $('#sourceType').find(':selected').text();
        var destinationType = $('#destinationType').find(':selected').text();
        console.log(`New source labware selected: ${sourceType}`);
        console.log(`New destination labware selected: ${destinationType}`);

        // if the selected source or destination type matches the text (not the value) in the dropdown
        // then set the value of the srcWellVolume ID to the maximum well volume
        // and show the available tip types
        // if the plate type is anything but a deep well plate, then show all tip types
        if (sourceType == "96 Corning Deep Well 2.0mL" || destinationType == "96 Corning Deep Well 2.0mL") {
            if (sourceType == "96 Corning Deep Well 2.0mL") {
                $('#srcWellVolume input').val(2000);
            }
            $('#tipType option').filter('[value="f20"], [value="s20"]').hide();
        }
        else if (sourceType == "96 BioRad PCR Skirted 200uL") {
            $('#srcWellVolume input').val(200);
            $('#tipType option').filter('[value="f20"], [value="s20"]').show();
        }
        else if (sourceType == "96 VWR PCR No-Skirt on Adapter 200uL") {
            $('#srcWellVolume input').val(200);
            $('#tipType option').filter('[value="f20"], [value="s20"]').show();
        }
        else if (sourceType == "96 (Qpix) Nunc Shallow Well 300uL") {
            $('#srcWellVolume input').val(300);
            $('#tipType option').filter('[value="f20"], [value="s20"]').show();
        }
        else if (sourceType == "96 Corning Black/Clear Flat Bottom 300uL") {
            $('#srcWellVolume input').val(300);
            $('#tipType option').filter('[value="f20"], [value="s20"]').show();
        }

    });

    

    // Dynamically update the method image based on the number of plates
    $('#numStamps').on('change', function() {

        var imageNumber = $('#numStamps option:selected').val();
        console.log(`${imageNumber} unique transfers`);
        
        if (imageNumber == 5) {
            $('#methodImage').attr('src', 'images/5 Stamp - 96 to 96.png');
        }
        else if (imageNumber == 4) {
            $('#methodImage').attr('src', 'images/4 Stamp - 96 to 96.png');
        }
        else if (imageNumber == 3) {
            $('#methodImage').attr('src', 'images/3 Stamp - 96 to 96.png');
        }
        else if (imageNumber == 2) {
            $('#methodImage').attr('src', 'images/2 Stamp - 96 to 96.png');
        }
        else if (imageNumber == 1) {
            $('#methodImage').attr('src', 'images/1 Stamp - 96 to 96.png');
        }
    });
    

    // Validate the stamp volume based on the labware, source well volume, and number of unique stamps
    $('#stampVol, #srcWellVolume').on('change', function() {

        // Select the elements
        const stampVolID = document.querySelector('#stampVol');
        const jumbotronID = document.querySelector('.jumbotron');

        // Get the available transfer volume amount
        var availableTransferVolume = $('#srcWellVolume input').val();
        console.log(`${availableTransferVolume} available for transfer`);

        // Calculate the total possible transfer volume
        var desiredTransferVolume = $('#stampVol input').val() * $('#numStamps option:selected').val();
        console.log(`${desiredTransferVolume} attempted to transfer`);

        // Check if the stamp volume exceeds the destination well maximum volume
        // If the desired transfer cannot be completed then show an error message and change the background color
        if (desiredTransferVolume > availableTransferVolume) {
            console.log(`There is ${desiredTransferVolume - availableTransferVolume}uL too little volume`);
            stampVolID.style.color = '#e06666ff'; // red
            jumbotronID.style.background = '#e06666ff'; // red
            // $('#startRun').hide();
            // $('#downloadCSV').hide();
            alert("ERROR: Not enough volume to complete transfer");
        }
        else if (desiredTransferVolume <= availableTransferVolume) {
            console.log(`There will be ${availableTransferVolume - desiredTransferVolume}uL left in the source wells`);
            stampVolID.style.color = 'black';
            jumbotronID.style.background = '#93c47dff'; // green
            // $('#startRun').show();
            // $('#downloadCSV').show();
        }
    });

    // ---------------- JSON ------------------
    // // Create a variable to hold the name of the labware search
    // var labwareSearchName = "96 (Qpix) Nunc Shallow Well 300uL";

    // // Create an empty object that will hold the JS object once the search term is found
    // var labwareObject = {};

    // // Create a boolean that will break out of the for loop once the search term is found
    // var labwareFound = false;

    // // Get a response from the labware.json file and loop through all objects in the array
    // var labwareResponseJSON = $.getJSON('labware.json', function(response) {

    //     // Loop through all objects in the labware array
    //     for(var i = 0; i < response.labware.length; i++) {

    //         // If the General Applications gaName matches the labware name we are looking for
    //         // Then change the boolean to true and store the entire object to the labwareObject variable
    //         // Break out of the loop once the search is found
    //         if (response.labware[i].gaName === labwareSearchName) {
    //             labwareFound = true;
    //             console.log(response.labware[i].gaName + " found!");
    //             labwareObject = response.labware[i];
    //             break;
    //         };
    //     };

    //     // Print the object that matched out search term to the console
    //     console.log(labwareObject);

    // });

});