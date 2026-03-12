function showTip(id) {

    let tips = document.querySelectorAll(".tip-info");

    tips.forEach(function(tip) {
        tip.style.display = "none";
    });

    let selectedTip = document.getElementById(id);
    selectedTip.style.display = "block";

}