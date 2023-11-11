const btnEl = document.getElementById('menu-btn');
const menuEl = document.getElementById('menu');

btnEl.addEventListener('click',navToggle);

function navToggle(){
  btnEl.classList.toggle('open');
  menuEl.classList.toggle('flex');
  menuEl.classList.toggle('hidden');
}