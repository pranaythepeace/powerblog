document.addEventListener("DOMContentLoaded", function () {
    // Trigger confetti on page load
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  
    // GSAP fade-in animations for the hero text
    gsap.fromTo(".hero h3", 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1 }
    );
    
    gsap.fromTo(".hero h4", 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    
    gsap.fromTo(".hero h1", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );
    
    gsap.fromTo(".hero h2", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 1.5 }
    );
  });
  