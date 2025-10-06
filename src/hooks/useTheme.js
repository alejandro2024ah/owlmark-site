import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('owlmrk-theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply theme to document
    root.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('owlmrk-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a202c' : '#ffffff');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}