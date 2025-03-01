
/**
 * Utility function to fade elements in when they enter the viewport
 * Uses Intersection Observer API
 */
export function setupScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  
  if (elementsToAnimate.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-enter');
        entry.target.classList.remove('opacity-0');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elementsToAnimate.forEach(element => {
    element.classList.add('opacity-0');
    observer.observe(element);
  });
}

/**
 * Utility function to create a staggered animation effect for children
 * @param parentSelector - The CSS selector for the parent element
 * @param childSelector - The CSS selector for the child elements to animate
 * @param staggerDelay - The delay between each child animation in milliseconds
 */
export function createStaggeredAnimation(
  parentSelector: string, 
  childSelector: string, 
  staggerDelay: number = 100
) {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;
  
  const children = parent.querySelectorAll(childSelector);
  
  children.forEach((child, index) => {
    const delay = index * staggerDelay;
    (child as HTMLElement).style.transitionDelay = `${delay}ms`;
    (child as HTMLElement).style.animationDelay = `${delay}ms`;
  });
}
