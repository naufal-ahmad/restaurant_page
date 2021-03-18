/*
  
  nama : candra dwi cahyo
  umur : 16 tahun
  email : candradwicahyo18@gmail.com
  
*/

window.addEventListener('scroll', () => {
  
  const btnScrolling = document.querySelector('.btn-scrolling');
  btnScrolling.classList.toggle('active', window.scrollY > 300);
  
});