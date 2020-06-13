window.onload = function () {
    document.getElementById('lightMode').addEventListener('mousedown', removeActive);
    document.getElementById('darkMode').addEventListener('mousedown', removeActive);


    getBase64img();

};

async function getBase64img(){

  let base64img = await fetch('/profile/base64', {method: 'GET'});
  base64img = await base64img.json();
  console.log(base64img);

  if(base64img!=undefined){ document.getElementById('noImage').innerHTML="";}
  document.getElementById('img').src=base64img;

}
function removeActive(ev) {
    console.log(ev.currentTarget);
    ev.currentTarget.classList.remove('active');
}