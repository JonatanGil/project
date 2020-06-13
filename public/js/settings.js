window.onload = function () {
  document.getElementById('lightMode').addEventListener('mousedown', removeActive);
  document.getElementById('darkMode').addEventListener('mousedown', removeActive);

  console.log(document.getElementById('lightMode'));

  document.getElementById("imgUpload").addEventListener("change", readFile);
  document.getElementById('save').addEventListener('click', saveSettings);
  console.log(document.getElementById('save'));

  getBase64img();

};

async function getBase64img(){

  let base64img = await fetch('/profile/base64', {method: 'GET'});
  base64img = await base64img.json();
  // console.log(base64img);

  if(base64img!=undefined){ document.getElementById('noImage').innerHTML="";}
  document.getElementById('img').src=base64img;

}

async function saveSettings() {
  let base64;
  if (document.getElementById('imagen') == null) { base64 = 0; } else { base64 = document.getElementById('imagen').src }
  let nombre = document.getElementById('nombre').value;
  let _id = document.getElementById('nombre').alt;
  console.log(document.getElementById('nombre'));
  console.log("id usuario =>" + _id);
  let passwordActual = document.getElementById('pwdActual').value;
  let passwordNueva = document.getElementById('pwdNueva').value;
  if (nombre == "") { nombre = "-" }
  if (passwordActual == "") { passwordActual = 0 }
  if (passwordNueva == "") { passwordNueva = 0 }

  // let url = '/settings/save/'+base64+'/'+nombre+'/'+passwordActual+'/'+passwordNueva;
  // console.log(url);

  let data = {
    base64: base64,
    _id: _id,
    name: nombre,
    pwdActual: passwordActual,
    pwdNueva: passwordNueva
  };

  await fetch('/settings/save/profile', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be string or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  });


  // const res = await resultado.json();

}

function readFile() {

  if (this.files && this.files[0]) {

    let FR = new FileReader();

    FR.addEventListener("load", function (e) {
      let img = document.createElement("img");
      document.getElementById("noImage").innerHTML = "";
      img.src = e.target.result;
      img.width = "300";
      img.id = "imagen";
      img.style.margin = "0px 0px 15px 0px";
      document.getElementById("noImage").appendChild(img);
      console.log(document.getElementById("noImage"));
    });

    FR.readAsDataURL(this.files[0]);
  }

}

function removeActive(ev) {
  console.log(ev.currentTarget);
  ev.currentTarget.classList.remove('active');
}