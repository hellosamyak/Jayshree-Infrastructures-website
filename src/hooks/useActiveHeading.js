import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// --- Custom Hook: useActiveHeading (The Scroll-Spy Logic) ---
export const useActiveHeading = (headingSlugs) => {
  const [activeSlug, setActiveSlug] = useState('');
  const location = useLocation();
  // Simplified path logic for this setup, assuming a top-level category path
  const categoryPath = location.pathname.split('/')[1] || 'company';

  useEffect(() => {
    // Determine the viewport margin where the heading should be considered 'active'
    const HEADER_OFFSET = 100;

    // IntersectionObserver options: fires when a heading enters the top 100px area of the viewport
    const observerOptions = {
      root: null,
      rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`, // Target area is between 100px and 40% down from the top
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      let currentActive = null;

      const intersectingEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectingEntries.length > 0) {
        // Find the one closest to the top
        currentActive = intersectingEntries.reduce((prev, curr) => {
          // A smaller boundingClientRect.top means it is closer to the top of the viewport
          return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
        }).target.id;
      }

      // Fallback: If nothing is intersecting, check if we are at the very top (start)
      if (!currentActive && window.scrollY < 100) {
        currentActive = headingSlugs[0];
      }

      if (currentActive) {
        setActiveSlug(currentActive);
        // Automatic URL update remains disabled here to avoid issues during scroll
      }

    }, observerOptions);

    // Observe all heading elements
    headingSlugs.forEach(slug => {
      const element = document.getElementById(slug);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function
    return () => {
      headingSlugs.forEach(slug => {
        const element = document.getElementById(slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headingSlugs, location.pathname, categoryPath]);

  return activeSlug;
};