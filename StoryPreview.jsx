import { Link } from "react-router-dom";
import "./story-preview.css";

function StoryPreview({ story }) {
 const { id, image, title, category, author, date, summary } = story;
 
return (
 <article className="story-card">
    <img src={image} alt={title} className="story-image" loading="lazy" decoding="async"/>

<div className="story-body">
    
<span className="story-category">{category}</span>

<h2 className="story-title">{title}</h2>

<div className="story-info">
    <span>{author}</span>
    <span>{date}</span>
</div>

<p className="story-summary">{summary}</p>

<Link to={`/story/${id}`} className="story-button"> Đọc Tiếp              </Link>
        </div>
    </article>
  );
}

export default StoryPreview;
