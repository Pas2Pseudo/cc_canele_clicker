let canele = 0;
let furnace = 0;

let buyAudio = new Audio('buy.mp3');

let comments = [];

function incrementCanele() {
    canele = canele + 1 + furnace;
    updateBtn();
}

function buyFurnace() {
    canele = canele - 25;
    furnace++;
    updateBtn();
    buyAudio.play();
}

function updateBtn() {
    document.getElementById('canele').innerHTML = "Vous avez " + canele + " canelé" + (canele > 1 ? "s" : "");
    if (canele >= 25) {
        document.getElementById('furnace').disabled = false;
    } else if (document.getElementById('furnace').disabled == false){
        document.getElementById('furnace').disabled = true;
    }
    document.getElementById('furnaces').innerHTML = "Vous avez " + furnace + " foure" + (furnace > 1 ? "s" : "") + " (Bonus : x" + furnace + ")";
}

function addComment() {
    comments.push(document.getElementById('comment').value);
    document.getElementById('comment').value = "";
    comments.reverse();

    let comts = "";
    comments.forEach(value => comts = comts + "<br>" + value);
    document.getElementById('comments').innerHTML = comts;
}