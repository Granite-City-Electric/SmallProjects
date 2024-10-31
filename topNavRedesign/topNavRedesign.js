const dropdownLinks = document.querySelectorAll('.has-dropdown');
const overlay = document.querySelector('.overlay');

function toggleShow(el) {
    if (el.classList.contains('show-flyout')) {
        el.classList.remove('show-flyout');
        el.classList.add('hide-flyout');
    } else if (el.classList.contains('hide-flyout')) {
        el.classList.remove('hide-flyout');
        el.classList.add('show-flyout');
    };
}

dropdownLinks.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
        const flyout = el.querySelector('.header-section-3-flyout');
        toggleShow(flyout);
        toggleShow(overlay);
    })
})

dropdownLinks.forEach((el) => {
    el.addEventListener('mouseleave', (e) => {
        const flyout = el.querySelector('.header-section-3-flyout');
        toggleShow(flyout);
        toggleShow(overlay);
    })
});

function toggleOverlay() {
    toggleShow(overlay);
}

