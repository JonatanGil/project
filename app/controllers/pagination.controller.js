module.exports = {
    getPaginations,
    getPaginationsSearch,
    getPaginationTopMovies,
    getPaginationTopMoviesNoSearch,
}

async function getPaginations(page, totalPages) {

    let previusText = "";
    let nextText    = "";
    let textRight   = "";
    let textLeft    = "";
    console.log("Pagina actual:" + page);
    console.log("Total de paginas:" + totalPages);

    if (page - 1 > 0) {
        previusText = "<li class='page-item'><a class='page-link' href='/home/?page=" + (page - 1) + "' tabindex='-1'>Anterior</a></li>";
    } else {
        previusText = "<li class='page-item disabled'><a class='page-link' href='/home/?page=" + (page - 1) + "' tabindex='-1'>Siguiente</a></li>";
    }

    if (page + 1 < totalPages) {
        nextText = "<li class='page-item'><a class='page-link' href='/home/?page=" + (page+1) + "'>Siguiente</a></li>";
    } else {
        nextText = "<li class='page-item disabled'><a class='page-link' href='/home/?page=" + (page+1) + "'>Siguiente</a></li>";
    }   
    console.log("textLeft page:" +(page-2));
    if((page - 2) > 0){
        textLeft = "<li class='page-item'><a class='page-link' href='/home/?page=" + (page-2) + "'>" + (page-2) + "</a></li>";
    }
    if((page + 2) < totalPages-2){
        textRight = "<li class='page-item'><a class='page-link' href='/home/?page=" + (page+2) + "'>" + (page+2) + "</a></li>";
    }

   

    return previusText + textLeft + "<li class='page-item'><a class='page-link active' href='/home/?page=" + page + "'>" + page + "</a></li>" + textRight + nextText;

}


async function getPaginationTopMovies(page, totalPages) {

    let previusText = "";
    let nextText    = "";
    let textRight   = "";
    let textLeft    = "";
    console.log("Pagina actual:" + page);
    console.log("Total de paginas:" + totalPages);

    if (page - 1 > 0) {
        previusText = "<li class='page-item'><a class='page-link' href='/topMovies/?page=" + (page - 1) + "' tabindex='-1'>Anterior</a></li>";
    } else {
        previusText = "<li class='page-item disabled'><a class='page-link' href='/topMovies/?page=" + (page - 1) + "' tabindex='-1'>Anterior</a></li>";
    }

    if (page + 1 < totalPages) {
        nextText = "<li class='page-item'><a class='page-link' href='/topMovies/?page=" + (page+1) + "'>Siguiente</a></li>";
    } else {
        nextText = "<li class='page-item disabled'><a class='page-link' href='/topMovies/?page=" + (page+1) + "'>Siguiente</a></li>";
    }   
    console.log("textLeft page:" +(page-2));
    if((page - 2) > 0){
        textLeft = "<li class='page-item'><a class='page-link' href='/topMovies/?page=" + (page-2) + "'>" + (page-2) + "</a></li>";
    }
    if((page + 2) < totalPages-2){
        textRight = "<li class='page-item'><a class='page-link' href='/topMovies/?page=" + (page+2) + "'>" + (page+2) + "</a></li>";
    }

   

    return previusText + textLeft + "<li class='page-item'><a class='page-link active' href='/topMovies/?page=" + page + "'>" + page + "</a></li>" + textRight + nextText;

}


async function getPaginationsSearch(page, totalPages, titulo) {

    let previusText = "";
    let nextText    = "";
    let textRight   = "";
    let textLeft    = "";
    console.log("Pagina actual:" + parseInt(page+2));
    console.log("Total de paginas:" + totalPages);
    let pagina = Number(page);

    if (page - 1 > 0) {
        previusText = "<li class='page-item'><a class='page-link' href='/search/?query="+titulo+"/" + (page - 1) + "' tabindex='-1'>Anterior</a></li>";
    } else {
        previusText = "<li class='page-item disabled'><a class='page-link' href='/search/?query="+titulo+"/" + (page - 1) + "' tabindex='-1'>Anterior</a></li>";
    }

    if (page + 1 < totalPages) {
        nextText = "<li class='page-item'><a class='page-link' href='/search/?query="+titulo+"/" + parseInt(pagina+1) + "'>Siguiente</a></li>";
    } else {
        nextText = "<li class='page-item disabled'><a class='page-link' href='/search/?query="+titulo+"/" + parseInt(pagina+1) + "'>Siguiente</a></li>";
    }   
    console.log("textLeft page:" +(page-2));
    if((page - 2) > 0){
        textLeft = "<li class='page-item'><a class='page-link' href='/search/?query="+titulo+"/" + parseInt(page-2) + "'>" + parseInt(page-2) + "</a></li>";
    }
    if((page + 2) < totalPages-2){
        textRight = "<li class='page-item'><a class='page-link' href='/search/?query="+titulo+"/" + parseInt(pagina+2) + "'>" + parseInt(pagina+2) + "</a></li>";
    }

   

    return previusText + textLeft + "<li class='page-item'><a class='page-link active' href='/search/?query="+titulo+"/" +page + "'>" + page + "</a></li>" + textRight + nextText;

}


async function getPaginationTopMoviesNoSearch(page, totalPages) {

    let previusText = "";
    let nextText    = "";
    let textRight   = "";
    let textLeft    = "";
    console.log("Pagina actual:" + page);
    console.log("Total de paginas:" + totalPages);

    if (page - 1 > 0) {
        previusText = "<li class='page-item'><a class='page-link' href='/search/?page=" + (page - 1) + "' tabindex='-1'>Anterior</a></li>";
    } else {
        previusText = "<li class='page-item disabled'><a class='page-link' href='/search/?page=" + (page - 1) + "' tabindex='-1'>Anterior</a></li>";
    }

    if (page + 1 < totalPages) {
        nextText = "<li class='page-item'><a class='page-link' href='/search/?page=" + (page+1) + "'>Siguiente</a></li>";
    } else {
        nextText = "<li class='page-item disabled'><a class='page-link' href='/search/?page=" + (page+1) + "'>Siguiente</a></li>";
    }   
    console.log("textLeft page:" +(page-2));
    if((page - 2) > 0){
        textLeft = "<li class='page-item'><a class='page-link' href='/search/?page=" + (page-2) + "'>" + (page-2) + "</a></li>";
    }
    if((page + 2) < totalPages-2){
        textRight = "<li class='page-item'><a class='page-link' href='/search/?page=" + (page+2) + "'>" + (page+2) + "</a></li>";
    }

   

    return previusText + textLeft + "<li class='page-item'><a class='page-link active' href='/search/?page=" + page + "'>" + page + "</a></li>" + textRight + nextText;

}