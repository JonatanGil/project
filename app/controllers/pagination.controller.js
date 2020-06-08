module.exports = {
    getPaginations,
}

async function getPaginations(page, totalPages) {

    let previusText = "";
    let nextText    = "";
    let textRight   = "";
    let textLeft    = "";
    console.log("Pagina actual:" + page);
    console.log("Total de paginas:" + totalPages);

    if (page - 1 > 0) {
        previusText = "<li class='page-item'><a class='page-link' href='/home/?page=" + (page - 1) + "' tabindex='-1'>Previous</a></li>";
    } else {
        previusText = "<li class='page-item disabled'><a class='page-link' href='/home/?page=" + (page - 1) + "' tabindex='-1'>Previous</a></li>";
    }

    if (page + 1 < totalPages) {
        nextText = "<li class='page-item'><a class='page-link' href='/home/?page=" + (page+1) + "'>Next</a></li>";
    } else {
        nextText = "<li class='page-item disabled'><a class='page-link' href='/home/?page=" + (page+1) + "'>Next</a></li>";
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