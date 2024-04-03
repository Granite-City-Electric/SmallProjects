console.log('test');
const btn = document.querySelector('.gce-hs-bi-list');
const links = document.querySelector('.gce-hs-nav-links-mobile-container');

btn.addEventListener('click', () => {
    links.classList.toggle('gce-hs-hide-mobile-menu')
})