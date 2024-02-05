document.addEventListener('DOMContentLoaded', function () {
    var hamburguer = document.querySelector('.hamburguer');
    var container = document.querySelector('.container');

    hamburguer.addEventListener('click', function () {
        container.classList.toggle('show-menu');
    });
});



function toggleMusic(){

    var musicDiv = document.getElementById("music");

    musicDiv.style.display = 'block';


}

function sair(){

    var sairDiv = document.getElementById("music")

    sairDiv.style.display = 'none';
}
