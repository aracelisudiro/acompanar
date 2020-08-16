document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 600 });
  ScrollReveal().reveal('.footer-links', { delay: 600 });
  ScrollReveal().reveal('.piedepagina', { delay: 600 });
  


  let text = document.getElementById('principalt');
  let str = text.innerHTML; 
  
  text.innerHTML = "";
  
  let speed = 200;
  let i = 0;
  
  function typeWriter() {
   if(i < str.length) {
       text.innerHTML += str.charAt(i);
       i++;
       setTimeout(typeWriter, speed);
  
   }
  
  }
  
  setTimeout(typeWriter, speed); 






