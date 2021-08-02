function SetVariable() {

    // get the element ID for a specific variable and then grab its value

    // Labware Settings
    var sourceTypeValue = document.getElementById("sourceType").value;
    var srcWellVolumeValue = document.getElementById("srcWellVolume").value;
    var destinationTypeValue = document.getElementById("destinationType").value;
    var tipTypeValue = document.getElementById("tipType").value;

    // Transfer Settings
    var numStampsValue = document.getElementById("numStamps").value;
    var stampVolValue = document.getElementById("stampVol").value;
    console.log(`Transfer volume is ${stampVolValue}`)

    // Aspirate Settings
    var aspirateHeightValue = document.getElementById("aspirateHeight").value;
    var changeTipsValue = document.getElementById("changeTips").value;
    var aspirateMixVolValue = document.getElementById("aspirateMixVol").value;
    var aspirateMixCountValue = document.getElementById("aspirateMixCount").value;

    // Dispense Settings
    var dispenseHeightValue = document.getElementById("dispenseHeight").value;
    var techniqueValue = document.getElementById("technique").value;
    var dispenseMixVolValue = document.getElementById("dispenseMixVol").value;
    var dispenseMixCountValue = document.getElementById("dispenseMixCount").value;

}