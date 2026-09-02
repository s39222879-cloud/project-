import { Link, useParams } from "react-router-dom";
import stories from "./stories";
import "./story-viewer.css";

function StoryViewer() {
  
const { id } = useParams();
const storyId = Number(id);

const story = stories.find(
(item) => item.id === storyId);
  
  if (!story) {
    return (
<section className="story-viewer">
  <h2>Không tìm thấy bài viết </h2>
        
<Link to="/" className="back-button">
          Quay về Trang Chủ 
        </Link>
      </section>
    );
}

const { image, title, category, author, date, content } = story;

return (
  
<section className="story-viewer">

  <img src={image} alt={title} 
    className="viewer-image" loading="eager" decoding="async"/>

<span className="viewer-category">{category}</span>

<h1 className="viewer-title">
  {title}</h1>
  
  <div className="viewer-info">
    
<span>{author}</span>
    
<span>{date}</span>
    
  </div>
  
  <p className="viewer-content">
    {content}
  </p>
  
<Link to="/" className="back-button"> ← Quay Lại </Link>
  
</section>
  );
}

export default StoryViewer;
