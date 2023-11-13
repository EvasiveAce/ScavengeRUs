'use strict';

// sorting hunts by status in the hunt display page/index.cshtml
let allButton = document.getElementById("All");
let activeButton = document.getElementById("Active");
let pendingButton = document.getElementById("Pending");
let endedButton = document.getElementById("Ended");

var tableRows = document.getElementsByTagName("tr");

allButton.addEventListener("click", (e) => {
    showHunts();
});

activeButton.addEventListener("click", (e) => {
    showHunts();
    hideEndedHunts();
    hidePendingHunts();
});

pendingButton.addEventListener("click", (e) => {
    showHunts();
    hideEndedHunts();
    hideActiveHunts();
});

endedButton.addEventListener("click", (e) => {
    showHunts();
    hideActiveHunts();
    hidePendingHunts();
});

function hideHunts() {
    huntTable.style.visibility = "hidden";
}

function showHunts() {
    for (var i = 0; i < tableRows.length; i++) {

        tableRows[i].style.display = "";
    }
};

function hidePendingHunts() {
    for (var i = 0; i < tableRows.length; i++) {

        var cells = tableRows[i].getElementsByTagName("td");

        for (var j = 0; j < cells.length; j++) {

            if (cells[j].innerHTML.includes("Pending", i)) {
                tableRows[i].style.display = "none";
            }
        }
    }
};

function hideEndedHunts() {
    for (var i = 0; i < tableRows.length; i++) {

        var cells = tableRows[i].getElementsByTagName("td");

        for (var j = 0; j < cells.length; j++) {

            if (cells[j].innerHTML.includes("Ended", i)) {
                tableRows[i].style.display = "none";
            }
        }
    }
};
function hideActiveHunts() {
    for (var i = 0; i < tableRows.length; i++) {

        var cells = tableRows[i].getElementsByTagName("td");

        for (var j = 0; j < cells.length; j++) {

            if (cells[j].innerHTML.includes("Active", i)) {
                tableRows[i].style.display = "none";
            }
        }
    }
};