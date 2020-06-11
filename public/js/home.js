window.onload = function () {
    document.getElementById('lightMode').addEventListener('mousedown', removeActive);
    document.getElementById('darkMode').addEventListener('mousedown', removeActive);
    console.log(document.getElementById('lightMode'));
    apiActiveSidebarNav();
};

function removeActive(ev) {
    console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');
}

function apiActiveSidebarNav(){
    
    var sidebarLateral = document.querySelectorAll('.c-sidebar-nav-link');
    // console.log(sidebarLateral);
    sidebarLateral.forEach(opcion => {
        // console.log(opcion.id);
        // console.log(opcion.classList.contains('c-active'));
        if (opcion.classList.contains('c-active')) {
            switch (opcion.id) {
                case "homePageActiveSidebar": {
                    document.querySelector('#homePageActiveNav').style.fontWeight = "bold";
                }break;
                case "topMoviesActiveSidebar": {
                    document.querySelector('#topMoviesActiveNav').style.fontWeight = "bold";
                }break;
                case "gameActiveSidebar": {
                    document.querySelector('#BuscarActiveNav').style.fontWeight = "bold";
                }break;
                case "apiActiveSidebar": {
                    document.querySelector('#apiActiveNav').style.fontWeight = "bold";
                }
            }
        };
    });
}