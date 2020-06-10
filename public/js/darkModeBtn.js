window.onload = function () {
    document.getElementById('lightMode').addEventListener('mousedown', removeActive);
    document.getElementById('darkMode').addEventListener('mousedown', removeActive);
    console.log(document.getElementById('lightMode'));
};

function removeActive(ev) {
    console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');
}