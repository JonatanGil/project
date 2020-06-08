window.onload = function () {
    document.getElementById('lightMode').addEventListener('mousedown', removeActive);
    document.getElementById('darkMode').addEventListener('mousedown', removeActive);


    // check for saved 'darkMode' in localStorage
    let darkMode = localStorage.getItem('c-dark-theme');

    const darkModeToggle = document.querySelector('#pills-tabContent');

    const enableDarkMode = () => {
        // 1. Add the class to the body
        //   document.body.classList.add('c-dark-theme');
        // 2. Update darkMode in localStorage
        localStorage.setItem('c-dark-theme', 'enabled');
    }

    const disableDarkMode = () => {
        // 1. Remove the class from the body
        //   document.body.classList.remove('c-dark-theme');
        // 2. Update darkMode in localStorage 
        localStorage.setItem('c-dark-theme', null);
    }

    // If the user already visited and enabled darkMode
    // start things off with it on
    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    // When someone clicks the button
    darkModeToggle.addEventListener('click', () => {
        // get their darkMode setting
        darkMode = localStorage.getItem('c-dark-theme');

        // if it not current enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
            // if it has been enabled, turn it off  
        } else {
            disableDarkMode();
        }
    });
};


function removeActive(ev) {
    // console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');
}

