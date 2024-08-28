
function loun() {
    let titre = document.getElementById('a');
    console.log(titre)
    titre.style.visibility = 'visible';
}
function bg() {
    let body = document.querySelector('body');
    console.log(body)
    body.style.background = "black";
}
function btn() {
    let esem = document.getElementById('esem').value;
    console.log(esem)
    let div = document.getElementById('greet');
    div.textContent = `Hello ${esem}`;

}
function verif(){
    let esem = document.getElementById('esem').value;
    if (esem ==""){
        alert('3amer e champ')
    }
    else(alert('jawek bhy'))
}