window.onload = function () {
    //darkModeBtn
    document.getElementById('lightMode').addEventListener('mousedown', removeActive);
    document.getElementById('darkMode').addEventListener('mousedown', removeActive);

    // viewGenres();

    document.getElementById('search').addEventListener('click', searchMovies);

}

async function searchMovies(ev) {
    let titulo = document.getElementById('titulo').value;
    let desde = document.getElementById('desde').value;
    // let hasta  = document.getElementById('hasta').value;
    console.log(document.getElementById('region'));
    let region = document.getElementById('region').value;
    // console.log("/titulo " + titulo + "/año " + desde + "/region " + region);
    if (titulo == "") { titulo = "A" }
    console.log('https://api.themoviedb.org/3/search/movie?api_key=46abaa78d32cf1e540336f2225aeec23&language=en-US&query=' + titulo + '&include_adult=false&region=' + region + '&year=' + desde + '&page=1');
    let res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=46abaa78d32cf1e540336f2225aeec23&language=en-US&query=' + titulo + '&include_adult=false&region=' + region + '&year=' + desde + '&page=1');
    let moviesOk = await res.json();
    console.log(moviesOk);
    var paginationDiv = await getPaginations(1, moviesOk.total_pages, titulo);
    
    moviesOk = moviesOk.results;
    
    textMovies = "";


    moviesOk.forEach(movie => {
        let titulo = movie.title
        let idMovie = movie.id;
        let poster = "https://image.tmdb.org/t/p/w400"+movie.poster_path;

        if (!movie.poster_path) { poster = "https://english2mee.files.wordpress.com/2018/07/proximamente.png?w=700" } else { }

        textMovies += "<div class='card'>" +
            "<div class='card-body text-center pt-0'>" +
            "<div class='card-header bg-transparent'>" +
            "<h6 class='card-title'>" + titulo + "</h6>" +
            "</div>" +
            "<img src='" + poster + "' alt='MoviePoster' id='MoviePoster'>" +
            "<p class='card-text'></p>" +
            "<a class='DetailMovie mb-2' href='/detail/?idMovie="+idMovie+"' style='cursor: pointer;'><button class='btn btn-secondary detail'>Details</button></a>" +
            "</div>" +
            "</div>";
    });

    document.getElementById('moviesBuscadas').innerHTML=textMovies;
    document.getElementById('pagination').innerHTML=paginationDiv;


}



async function getPaginations(page, totalPages, titulo) {

    let previusText = "";
    let nextText    = "";
    let textRight   = "";
    let textLeft    = "";
    console.log("Pagina actual:" + page);
    console.log("Total de paginas:" + totalPages);

    if (page - 1 > 0) {
        previusText = "<li class='page-item'><a class='page-link' href='/search/?query="+titulo+"/" + (page - 1) + "/genero' tabindex='-1'>Previous</a></li>";
    } else {
        previusText = "<li class='page-item disabled'><a class='page-link' href='/search/?query="+titulo+"/" + (page - 1) + "/genero' tabindex='-1'>Previous</a></li>";
    }

    if (page + 1 < totalPages) {
        nextText = "<li class='page-item'><a class='page-link' href='/search/?query="+titulo+"/" + (page+1) + "/genero'>Next</a></li>";
    } else {
        nextText = "<li class='page-item disabled'><a class='page-link' href='/search/?query="+titulo+"/" + (page+1) + "/genero'>Next</a></li>";
    }   
    console.log("textLeft page:" +(page-2));
    if((page - 2) > 0){
        textLeft = "<li class='page-item'><a class='page-link' href='/search/?query="+titulo+"/" + (page-2) + "/genero'>" + (page-2) + "</a></li>";
    }
    if((page + 2) < totalPages-2){
        textRight = "<li class='page-item'><a class='page-link' href='/search/?query="+titulo+"/" + (page+2) + "/genero'>" + (page+2) + "</a></li>";
    }

   

    return previusText + textLeft + "<li class='page-item'><a class='page-link active' href='/search/?query="+titulo+"/" +page + "/genero'>" + page + "</a></li>" + textRight + nextText;

}


//un active adtive pills
function removeActive(ev) {
    // console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');

}


async function viewGenres(){
    let generos;
    let optionsGeneros = "";

    let resultado  = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=46abaa78d32cf1e540336f2225aeec23&language=es');
    generos = await resultado.json();
    console.log(generos);
    optionsGeneros = "<option value='All'>Todo</option>"
    generos.genres.forEach(genero => {
        let id = genero.id;
        let generoName = genero.name;
        optionsGeneros += "<option value='"+id+"'>"+generoName+"</option>";
    });
    console.log(optionsGeneros);
    document.getElementById('genero').innerHTML=optionsGeneros;

}  