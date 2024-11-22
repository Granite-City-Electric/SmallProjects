const btn = document.querySelector('.td-btn');
const dd = document.querySelector('.td-dd');

btn.addEventListener('click', () => {
    dd.classList.toggle('show');
})