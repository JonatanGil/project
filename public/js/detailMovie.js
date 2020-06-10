window.onload = function () {
    document.querySelector('#iconFav').addEventListener('click', favUnfav);
    document.querySelector('#iconView').addEventListener('click', viewUnView);
    document.querySelector('#btnVote').addEventListener('click', voteMovie);

    //darkModeBtn
    document.getElementById('lightMode').addEventListener('mousedown', removeActive);
    document.getElementById('darkMode').addEventListener('mousedown', removeActive);
}

//un active adtive pills
function removeActive(ev) {
    // console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');

}


async function favUnfav(fav) {
    console.log(fav.currentTarget);
    console.log(fav.currentTarget.attributes.idmovie);
    const idMovie = fav.currentTarget.getAttribute("idmovie");
    console.log(idMovie);

    if (document.querySelector('#heartFav').classList.contains("text-danger")) {
        document.querySelector('#heartFav').classList.remove("text-danger");
        document.querySelector('#heartFav').classList.add("text-secondary");
    } else {
        document.querySelector('#heartFav').classList.remove("text-secondary");
        document.querySelector('#heartFav').classList.add("text-danger");
    }

    const url = `/view/favorites/${idMovie}`;
    console.log(url);
    await fetch(url, { method: 'POST' });
    console.log("favorites Finalizado");
}

async function viewUnView(view) {
    console.log(view.currentTarget);
    console.log(view.currentTarget.attributes.idmovie);
    const iconEye = document.querySelector('#iconEye');
    const idMovie = view.currentTarget.getAttribute("idmovie");
    console.log(idMovie);

    if (iconEye.classList.contains("fa-eye")) {
        iconEye.classList.remove("fa-eye");
        iconEye.classList.add("fa-eye-slash");
    } else {
        iconEye.classList.remove("fa-eye-slash");
        iconEye.classList.add("fa-eye");
    }

    const url = `/view/viewedMovie/${idMovie}`;
    console.log(url);
    await fetch(url, { method: 'POST' });
    console.log("viewUpdate Finalizado");

}

async function voteMovie(e) {

    console.log(e.currentTarget);
    console.log(e.currentTarget.attributes.idmovie);
    const idMovie = e.currentTarget.getAttribute("idmovie");
    console.log(idMovie);
    console.log(document.querySelector("#score"));
    const score = document.querySelector("#score").value;

    e.currentTarget.parentNode.innerHTML = "<i class='fas fa-vote-yea text-success' style='width: 40px;height: 40px;margin-top:10px'></i><h4 style='font-size:12px;'>Puntuado</h4>";


    const url = `/view/movieScore/${idMovie}/${score}`;
    console.log(url);
    await fetch(url, { method: 'POST' });
    console.log("viewUpdate Finalizado");

}