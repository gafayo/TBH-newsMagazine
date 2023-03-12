const menubar = document.querySelector('.menu-bar');
const listOfLinks = document.querySelector('.nav-list');

menubar.addEventListener('click', function(){
    listOfLinks.classList.toggle('active');
})