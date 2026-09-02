import { createContext, useCallback, useContext, useEffect, useMemo, useState, } from "react";

const THEME_STORAGE_KEY = "app-theme";

const ThemeContext = createContext(undefined);

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  
const prefersDark =
window.matchMedia("(prefers-color-scheme: dark)").matches;

return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  
  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => 
      currentTheme === "dark" ? "light" : "dark"
    );
}, []);

useEffect(() => {
  
document.documentElement.setAttribute("data-theme", theme);

localStorage.setItem(THEME_STORAGE_KEY, theme);
}, [theme]);

const value = useMemo(() => ({ theme, toggleTheme, }), [theme, toggleTheme]
);

return (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error(
      "useTheme must be used within ThemeProvider."
  );
}

  return context;
}
