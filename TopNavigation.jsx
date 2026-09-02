import "./top-navigation.css";
import { useTheme } from "./ThemeProvider"

function TopNavigation({ 
  isMenuOpen,
  onToggleMenu,
}) {
  
const { theme, toggleTheme } = useTheme();

return (
  <header className="top-nav">
  
<button type="button" className="menu-btn" onClick={onToggleMenu} aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}>
    
  {isMenuOpen ? "✕" : "☰"}
</button>

<h2>News</h2>

<div className="top-nav-right">
<button type="button" className="theme-btn" onClick={toggleTheme} aria-label="Đổi giao diện">
{theme === "dark" ? "☀️" : "🌙"}
        </button>
    </div>
</header>
  );
}
export default TopNavigation;
