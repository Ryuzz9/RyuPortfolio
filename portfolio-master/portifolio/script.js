document.addEventListener('DOMContentLoaded', function () {
    var hamburguer = document.querySelector('.hamburguer');
    var container = document.querySelector('.container');

    hamburguer.addEventListener('click', function () {
        container.classList.toggle('show-menu');
    });
});
