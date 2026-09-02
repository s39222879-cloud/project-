import { useState } from "react";
import TopNavigation from "./TopNavigation";
import LeftMenu from "./LeftMenu";

import "./news-layout.css";

function NewsLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }
  
  function closeMenu() {
    setMenuOpen(false);
  }
  
  return (
    <>
      
      <TopNavigation
        onToggleMenu={toggleMenu}
      />
      
      <LeftMenu
        menuOpen={menuOpen}
        onCloseMenu={closeMenu}
      />
      
      <main className="content">
        {children}
      </main>
      
    </>
  );
}
export default NewsLayout;

