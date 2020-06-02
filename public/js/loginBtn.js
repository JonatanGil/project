window.onload = function () {
    document.getElementById('btnRegister').addEventListener('mouseup', removeActive);
    document.getElementById('btnLogin').addEventListener('mouseup', removeActive);
};


function removeActive(ev) {
    // console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');
    ev.currentTarget.style.color='#007bff';    
    document.querySelectorAll('.msgError').forEach(msgError => msgError.parentNode.removeChild(msgError));
}