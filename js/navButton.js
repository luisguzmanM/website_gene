const navButton = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');
const menuNav = document.getElementById('menu-nav');

navButton.addEventListener('click', function(){
  menuNav.style.display = 'block';
  closeBtn.style.display = 'block';
  navButton.style.display = 'none';
})

closeBtn.addEventListener('click', function(){
  menuNav.style.display = 'none';
  closeBtn.style.display = 'none';
  navButton.style.display = 'block';
})