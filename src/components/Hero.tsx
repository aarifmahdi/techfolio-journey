
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Particles settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30));
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(196, 240, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    // Connect particles with lines if they're close enough
    function connectParticles() {
      if (!ctx) return;
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(196, 240, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto mt-16 md:mt-0">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium animate-fade-in">
            Computer Engineer
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in [animation-delay:200ms] leading-tight">
            Building the <span className="gradient-text">digital future</span>
            <br /> 
            one line at a time
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 mx-auto max-w-2xl animate-fade-in [animation-delay:400ms]">
            I design and develop innovative solutions that bridge hardware and software,
            creating systems that are efficient, reliable, and user-friendly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium transition-transform hover:scale-105 hover:shadow-lg"
            >
              View My Projects
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 border border-border rounded-lg font-medium transition-all hover:bg-secondary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors animate-fade-in [animation-delay:800ms]"
        aria-label="Scroll to About section"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
