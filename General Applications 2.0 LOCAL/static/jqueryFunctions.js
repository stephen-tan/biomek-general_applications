// Execute functions once the application is fully loaded
$(document).ready(function() {

    // Auto-fill source well volume and filter compatible tip types based on source type
    $('#sourceType, #destinationType').on('change', function() {

        // get value of the sourceType and destinationType selected and log it to the console
        var sourceType = $('#sourceType').find(':selected').text();
        var destinationType = $('#destinationType').find(':selected').text();
        console.log(`New source labware selected: ${sourceType}`);

        // if the selected source or destination type matches the text (not the value) in the dropdown
        // then set the value of the srcWellVolume ID to the maximum well volume
        // and show the available tip types
        // if the plate type is anything but a deep well plate, then show all tip types
        if (sourceType == "96 Corning Deep Well 2.0mL" || destinationType == "96 Corning Deep Well 2.0mL") {
            $('#srcWellVolume input').val(2000);
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

        console.log("in section");

        var imageNumber = $('#numStamps option:selected').val();
        console.log(imageNumber);
        
        if (imageNumber == "5") {
            $('#methodImage').attr('src', 'images/5 Stamp - 96 to 96.png');
        }
        else if (imageNumber == "4") {
            $('#methodImage').attr('src', 'images/4 Stamp - 96 to 96.png');
        }
        else if (imageNumber == "3") {
            $('#methodImage').attr('src', 'images/3 Stamp - 96 to 96.png');
        }
        else if (imageNumber == "2") {
            $('#methodImage').attr('src', 'images/2 Stamp - 96 to 96.png');
        }
        else if (imageNumber == "1") {
            $('#methodImage').attr('src', 'images/1 Stamp - 96 to 96.png');
        }
    });

    // Validate the stamp volume based on the labware, source well volume, and number of unique stamps
    $('#stampVol').on('change', function() {
        console.log("Need more volume");

        // Calculate the total possible transfer volume

        // Check if the stamp volume exceeds the destination well maximum volume
        // by reading the "maxVolume" key from the labware.json file
    });
});