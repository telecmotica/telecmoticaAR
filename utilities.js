
//AFRAME COMPONENTS DESCRIPTORS
var detectedQR = false;

// *** AT THE MOMENT: NOT IN USE ! ***
//Handler events from A-MARKER
AFRAME.registerComponent("markercomp", {
    init: function () {
        var marker = document.querySelector("#marker");
        marker.addEventListener("markerFound", function () {

             //displayEntity("#pallet","#marker"); 
        });

        marker.addEventListener("markerLost", function () {
              //  removeEntity("#pallet");
        });

    }
});

function displayEntity(e_id,m_id) {

}

function removeEntity(e_id) {

}