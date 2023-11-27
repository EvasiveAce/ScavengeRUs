'use strict';

// sorting hunts by status in the hunt display page/index.cshtml
let allButton = document.getElementById("All");
let activeButton = document.getElementById("Add");
let pendingButton = document.getElementById("Remove");


var tableRows = document.getElementsByTagName("tr");

allButton.addEventListener("click", (e) => {
    showHunts();
});

activeButton.addEventListener("click", (e) => {
    showHunts();
    hideEndedHunts();
});

pendingButton.addEventListener("click", (e) => {
    showHunts();
    hideActiveHunts();
});


function hideHunts() {
    huntTable.style.visibility = "hidden";
}

function showHunts() {
    for (var i = 0; i < tableRows.length; i++) {

        tableRows[i].style.display = "";
    }
};

function hideEndedHunts() {
    for (var i = 0; i < tableRows.length; i++) {

        var cells = tableRows[i].getElementsByTagName("td");

        for (var j = 0; j < cells.length; j++) {

            if (cells[j].innerHTML.includes("Remove", i)) {
                tableRows[i].style.display = "none";
            }
        }
    }
};
function hideActiveHunts() {
    for (var i = 0; i < tableRows.length; i++) {

        var cells = tableRows[i].getElementsByTagName("td");

        for (var j = 0; j < cells.length; j++) {

            if (cells[j].innerHTML.includes("Add", i)) {
                tableRows[i].style.display = "none";
            }
        }
    }
};