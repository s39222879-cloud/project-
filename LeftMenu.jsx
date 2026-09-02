import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./left-menu.css";

const menuItems = [
{ to: "/", label: "Trang Chủ" },
{ to: "/sports", label: "Thể Thao" },
{ to: "/technology", label: "Công Nghệ" },
{ to: "/login", label: "Đăng Nhập" },
{ to: "/admin", label: "Quản Trị" },
];

function LeftMenu({ menuOpen,
onCloseMenu }){

useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "";
  
return () => {
document.body.style.overflow = "";
  };
}, [menuOpen]);

useEffect(() => {
  if (!menuOpen) return;
  
const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    onCloseMenu();
  }
};

window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
  };
}, [menuOpen, onCloseMenu]);

return (
    <>
<div className={menuOpen ? "overlay show" : "overlay"} onClick={onCloseMenu}/>

<aside id="main-menu" className={`left-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen} aria-label="Main navigation">
  
<h2>Zero news</h2>
  
<nav>
{menuItems.map((item) => (
<NavLink key={item.to} to={item.to} onClick={onCloseMenu} className={({ isActive }) => isActive ? "active" : ""
}>{item.label}
          </NavLink>
          ))}
      </nav>
    </aside>
    </>
  );
}

export default LeftMenu;



    
    

