let currentID = null;
let message;

$(".rating").click(() => {
    if (currentID) {
        document.getElementById(currentID).classList.remove("rating-selected")
    }
    currentID = event.target.id;
    document.getElementById(currentID).classList.add("rating-selected")
}) 

$(".submit").click(() => {
    if (currentID) {
        document.querySelector(".container").style.display = "none";
        document.querySelector(".thankyou-container").style.display = "flex"
        message = "You selected " + currentID + " out of 5";
        document.getElementById("selection-info").innerHTML = message;
    }
})