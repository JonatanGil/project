window.onload = function () {
    document.getElementById('btnRegister').addEventListener('mouseup', removeActive);
    document.getElementById('btnLogin').addEventListener('mouseup', removeActive);

    //DARKMODE buton
    document.getElementById('lightMode').addEventListener('mousedown', removeActiveDarkMode);
    document.getElementById('darkMode').addEventListener('mousedown', removeActiveDarkMode);
    console.log(document.getElementById('lightMode'));

};

function removeActive(ev) {
    console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');
    ev.currentTarget.style.color='#007bff';    
    document.querySelectorAll('.msgError').forEach(msgError => msgError.parentNode.removeChild(msgError));
}

//darkmodeActive UnActive
function removeActiveDarkMode(ev) {
    console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');
}