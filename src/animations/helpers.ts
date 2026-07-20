import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * 1. Loader page reveal transition.
 * Returns the timeline for control if needed.
 */
export const runLoaderReveal = (
  loaderEl: HTMLElement, 
  monogramEl: HTMLElement, 
  lineEl: HTMLElement, 
  onComplete: () => void
) => {
  const tl = gsap.timeline({ onComplete });
  
  tl.to(lineEl, { 
    width: '100%', 
    duration: 1.4, 
    ease: 'power2.inOut' 
  })
  .to(monogramEl, { 
    opacity: 0, 
    y: -20, 
    duration: 0.5, 
    ease: 'power2.in' 
  })
  .to(loaderEl, { 
    clipPath: 'inset(0 0 100% 0)', 
    duration: 1.0, 
    ease: 'power4.inOut' 
  });

  return tl;
};

/**
 * 2. Text split reveal (words/lines reveal).
 * Returns a cleanup control structure containing tween, split, and kill handler.
 */
export const splitReveal = (element: HTMLElement, delay: number = 0) => {
  if (!element) return null;
  
  try {
    const split = new SplitType(element, { types: 'lines,words' });
    
    const tween = gsap.from(split.words, {
      y: '100%',
      opacity: 0,
      duration: 1.2,
      stagger: 0.03,
      ease: 'power4.out',
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });

    return {
      tween,
      split,
      kill: () => {
        if (tween.scrollTrigger) {
          tween.scrollTrigger.kill();
        }
        tween.kill();
        split.revert();
      }
    };
  } catch (error) {
    console.warn('splitReveal failed:', error);
    return null;
  }
};

/**
 * 3. Fade in and upward lift on scroll.
 * Returns a control structure containing tween and kill handler.
 */
export const fadeIn = (element: HTMLElement, trigger?: HTMLElement, delay: number = 0) => {
  if (!element) return null;
  
  const tween = gsap.fromTo(element, 
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    }
  );

  return {
    tween,
    kill: () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    }
  };
};

/**
 * 4. Image crop overlay slide reveal.
 * Returns a control structure containing timeline and kill handler.
 */
export const imageReveal = (imageWrapper: HTMLElement) => {
  if (!imageWrapper) return null;
  
  const overlay = imageWrapper.querySelector('.reveal-overlay');
  const img = imageWrapper.querySelector('img');
  
  if (!overlay || !img) return null;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: imageWrapper,
      start: 'top 80%',
      toggleActions: 'play none none none',
    }
  });

  tl.to(overlay, {
    scaleY: 0,
    transformOrigin: 'top',
    duration: 1.2,
    ease: 'power4.inOut',
  })
  .from(img, {
    scale: 1.1,
    duration: 1.6,
    ease: 'power3.out',
  }, '-=1.0');

  return {
    timeline: tl,
    kill: () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    }
  };
};

/**
 * 5. Staggered reveal of direct children of a container.
 * Returns a control structure containing tween and kill handler.
 */
export const staggerReveal = (container: HTMLElement, selector: string, delay = 0) => {
  if (!container) return null;
  
  const items = container.querySelectorAll(selector);
  if (!items.length) return null;
  
  const tween = gsap.fromTo(items, 
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    }
  );

  return {
    tween,
    kill: () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
      gsap.set(items, { clearProps: 'all' });
    }
  };
};

/**
 * 6. Dynamic count up animation.
 * Returns a control structure containing tween and kill handler.
 */
export const counter = (element: HTMLElement, endValue: number, suffix = '', duration = 1.8) => {
  if (!element) return null;
  
  const obj = { value: 0 };
  const tween = gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      element.innerText = Math.floor(obj.value).toLocaleString() + suffix;
    }
  });

  return {
    tween,
    kill: () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    }
  };
};

/**
 * 7. Subtle parallax scroll.
 * Returns a control structure containing tween and kill handler.
 */
export const parallax = (element: HTMLElement, speed = -80) => {
  if (!element) return null;
  
  const tween = gsap.to(element, {
    y: speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });

  return {
    tween,
    kill: () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    }
  };
};

/**
 * 8. Reusable hover lift animation.
 */
export const hoverLift = (element: HTMLElement, targetY = -4) => {
  if (!element) return null;
  
  return gsap.to(element, {
    y: targetY,
    duration: 0.4,
    ease: 'power2.out',
  });
};

/**
 * 9. Reusable hover lift reset.
 */
export const hoverReset = (element: HTMLElement) => {
  if (!element) return null;
  
  return gsap.to(element, {
    y: 0,
    duration: 0.4,
    ease: 'power2.out',
  });
};
