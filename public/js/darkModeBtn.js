window.onload = function () {
    document.getElementById('lightMode').addEventListener('mouseup', removeActive);
    document.getElementById('darkMode').addEventListener('mouseup', removeActive);
};


function removeActive(ev) {
    // console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');
    ev.currentTarget.style.color='#007bff';
}