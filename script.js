const btnAceptar = document.getElementById('btn-aceptar');
const btnRechazar = document.getElementById('btn-rechazar');

btnAceptar.addEventListener('click', () => {
    alert('¡Genial! Me alegra que hayas aceptado');
});


btnRechazar.addEventListener('mouseover',() => {
    btnRechazar.style.position = 'absolute';
    btnRechazar.style.top = Math.random() * (window.innerHeight - btnRechazar.offsetHeight) + 'px';
    btnRechazar.style.left = Math.random() * (window.innerWidth - btnRechazar.offsetWidth) + 'px';
});