window.onload = function() {
    var sidebarLateral = document.querySelectorAll('c-sidebar-nav-item');
    sidebarLateral.forEach(opcion => {
        if (opcion.classList.contains('c-active')) {
            switch (opcion.id) {
                case "homePageActiveSidebar":{
                    document.querySelector('.homePageActiveNav').style.fontWeight = "bold"; 
                }
                case "topMoviesActiveSidebar":{
                    document.querySelector('.topMoviesActiveNav').style.fontWeight = "bold"; 
                }
                case "gameActiveSidebar":{
                    document.querySelector('.gameActiveNav').style.fontWeight = "bold"; 
                }
                case "apiActiveSidebar":{
                    document.querySelector('.apiActiveNav').style.fontWeight = "bold"; 
                }
            }
        };
    });
  };