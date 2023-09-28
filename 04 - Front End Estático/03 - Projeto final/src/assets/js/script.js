const sr = ScrollReveal();

sr.reveal('.card', {
  origin: 'top',  
  distance: '20px',  
  duration: 1000,    
  delay: 200,        
  easing: 'cubic-bezier(0.5, 0, 0, 1)', 
  reset: true,       
});

document.addEventListener('DOMContentLoaded', () => {
    sr.reveal('.card');
  });