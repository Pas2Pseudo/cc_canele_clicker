let canele = 0;
let furnace = 0;

let comments = [];

var task = false;

window.onload = function () {
    init();
}

function init() {
    console.log("Init page");
    if (localStorage.getItem("canele") != null) {
        canele = parseInt(localStorage.getItem("canele"));
    }
    if (localStorage.getItem("furnace") != null) {
        furnace = parseInt(localStorage.getItem("furnace"));
        startTask();
    }
    if (localStorage.getItem("comments") != null) {
        comments = localStorage.getItem("comments").split("/@{~}@/");
        printComments();
    }
    updateBtn();
}

function incrementCanele() {
    canele = canele + 1 + furnace;
    updateBtn();
    localStorage.setItem("canele", canele);
}
function buyFurnace() {
    canele = canele - 25;
    furnace++;
    updateBtn();
    startTask();
    localStorage.setItem("furnace", furnace);
}

function updateBtn() {
    document.getElementById('canele').innerHTML = "Vous avez " + canele + " canelé" + (canele > 1 ? "s" : "") + " soit " + (canele * 0.5) + "€ selon carrouf (vive le capitalisme)";
    if (canele >= 25) {
        document.getElementById('furnace').disabled = false;
    } else if (document.getElementById('furnace').disabled == false){
        document.getElementById('furnace').disabled = true;
    }
    document.getElementById('furnaces').innerHTML = "Vous avez " + furnace + " foure" + (furnace > 1 ? "s" : "") + " (Bonus : x" + furnace + ")";
}

function addComment() {
    let comm = document.getElementById('comment').value;
    comments.push(comm);
    document.getElementById('comment').value = "";

    localStorage.setItem("comments", serialize(comments));

    printComments();
}

function printComments() {
    let comts = "";
    comments.forEach(value => comts = comts + "<br>" + value);
    document.getElementById('comments').innerHTML = comts;
}


function startTask() {
    if (furnace >= 5 && !task) {
        window.setInterval(function () {
            for (let i = 1; i <= furnace; i++) {
                canele++;
                localStorage.setItem("canele", canele);
                updateBtn();
            }
        }, 1000);
        task = true;
    }
}

function serialize(list) {
    let result = "";
    list.forEach(value => result = result + "/@{~}@/" + value);
    return result;
}