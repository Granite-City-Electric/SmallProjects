const gceHSDropdownHeaders = document.querySelectorAll('.gce-hs-dropdown-header-container');
const hsBars = document.querySelectorAll('.gce-hs-bar-2');

console.log(gceHSDropdownHeaders);
console.log(hsBars);

gceHSDropdownHeaders.forEach((el,idx) => {
    el.addEventListener("click", function(){
        this.classList.toggle("gce-hs-active");
        let drop = this.nextElementSibling;
        if(drop.style.maxHeight) {
            drop.style.maxHeight = null;
        } else {
            drop.style.maxHeight = drop.scrollHeight + "px";
        }
        hsBars[idx].classList.toggle("gce-hs-bar-active");
    })
})