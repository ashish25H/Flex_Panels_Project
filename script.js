const panel = document.querySelectorAll('.panel');
function addClass() {
  this.classList.add('open');

  setTimeout(() => {
    this.classList.remove('open');
  }, 2000);
}


panel.forEach((panel) => { panel.addEventListener('click', addClass) });
