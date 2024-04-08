const logos = document.querySelectorAll(".gce-logo-ph");
const popups = document.querySelectorAll(".gce-pu-container");
const closeouts = document.querySelectorAll(".gce-pu-closeout-container")

logos.forEach(function(el, idx) {
    el.addEventListener("click", function() {
        popups[idx].classList.toggle("gce-pu-hide");
    })
})

closeouts.forEach(function(x, idx) {
    x.addEventListener("click", function () {
        popups[idx].classList.toggle("gce-pu-hide");
    })
})