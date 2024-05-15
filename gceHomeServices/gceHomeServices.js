const btn = document.querySelector('.gce-hs-bi-list');
const links = document.querySelector('.gce-hs-nav-links-mobile-container');

btn.addEventListener('click', () => {
    links.classList.toggle('gce-hs-hide-mobile-menu')
});


const genTabs = document.querySelectorAll('.gce-hs-g-panel-control');
const genTabHeaders = document.querySelectorAll('.gce-hs-g-control-header');
const genPanels = document.querySelectorAll('.gce-hs-g-panel-info');

genTabs.forEach((el,idx) => {
    el.addEventListener("click", function() {
        genTabs.forEach((tab) => tab.classList.remove('gce-hs-g-panel-control-active'));
        genTabHeaders.forEach((head) => head.classList.remove('gce-hs-g-panel-control-header-active'));
        genPanels.forEach((panel) => panel.classList.remove('gce-hs-g-panel-info-active'))
        
        genTabs[idx].classList.add('gce-hs-g-panel-control-active');
        genTabHeaders[idx].classList.add('gce-hs-g-panel-control-header-active');
        genPanels[idx].classList.add('gce-hs-g-panel-info-active');
    })
})
