
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a 
              href="#home" 
              className="text-xl font-semibold tracking-tight"
            >
              <span className="font-mono text-primary">{'<'}</span>
              Portfolio
              <span className="font-mono text-primary">{'/>'}</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Computer Engineer • Developer • Innovator
            </p>
          </div>
          
          <div className="flex flex-col items-center mt-6 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary/10 text-primary mb-4 hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
            
            <p className="text-sm text-muted-foreground">
              © {currentYear} Computer Engineering Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
