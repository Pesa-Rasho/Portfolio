const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-container');

menuToggle.addEventListener('click', () => {
  navContainer.classList.toggle('active');
});

function loadHTML (filename, elementId) {
  fetch(filename)
  .then(response => response.text())
  .then(data => document.getElementById(elementId).innerHTML = data);
}

window.onload = function(){
  loadHTML('header.html', 'header');
  loadHTML('footer.html', 'footer');
}