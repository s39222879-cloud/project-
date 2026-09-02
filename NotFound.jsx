import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./not-found.css";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Không tìm thấy trang";
}, []);

return (
<main className="not-found">
<div className="not-found__content">
<h1
className="not-found__code">404</h1>

<h2 className="not-found__title">Không tìm thấy trang</h2>

<p className="not-found__description">
  
Trang của bạn đang tìm kiếm không còn tồn tại hoặc đã bị xóa hoặc URL không chính xác.
</p>

<Link className="not-found__button" to="/">
  Quay về trang chủ 
         </Link>
      </div>
  </main>
  );
}

export default NotFound;