/*
  nama : candra dwi cahyo
  umur : 16 tahun / 20 - mei - 2004
  github : candradwicahyo
  email : candradwicahyo18@gmail.com
*/

AOS.init({
  once: true
})

const navBox = document.querySelector('.navbar-box');
const navButton = document.querySelector('.navbar-toggle');
navButton.addEventListener('click', function() {
  this.classList.toggle('active');
  navBox.classList.toggle('active');
});
