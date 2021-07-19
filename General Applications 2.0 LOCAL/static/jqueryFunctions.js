// Execute functions once the application is fully loaded
$(document).ready(function() {

    // Auto-fill Source Well Volume based on Source Plate Type
    $("#sourceType").on('change', function() {

        // Get value of the sourceType selected and log it to the console
        var sourceType = $("#sourceType").find(":selected").text();
        console.log(`New source labware selected: ${sourceType}`);

        // if the selected source type matches the text (not the value) in the dropdown
        // the set the value of the srcWellVolume ID to the maximum well volume
        if (sourceType == "96 Corning Deep Well 2.0mL") {
            $('#srcWellVolume input').val(2000);
        }
        else if (sourceType == "96 BioRad PCR Skirted 200uL") {
            $('#srcWellVolume input').val(200);
        }
        else if (sourceType == "96 VWR PCR No-Skirt on Adapter 200uL") {
            $('#srcWellVolume input').val(200);
        }
        else if (sourceType == "96 (Qpix) Nunc Shallow Well 300uL") {
            $('#srcWellVolume input').val(300);
        }
        else if (sourceType == "96 Corning Black/Clear Flat Bottom 300uL") {
            $('#srcWellVolume input').val(300);
        }
    });

});