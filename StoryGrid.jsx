import StoryPreview from "./StoryPreview";
import "./story-grid.css";

function StoryGrid({ stories }) {
  if (!stories?.length) {
    return <div className="story-empty">Không Tìm Thấy Bài Viết.</div>;
}
  
return (
<section className="story-grid">
  {stories.map((story) => (
    <StoryPreview key={story.id} story={story}/>
))}
  </section>
  );
}

export default StoryGrid;
