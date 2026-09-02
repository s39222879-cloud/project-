import { useState, useMemo } from "react";
import NewsLayout from "./NewsLayout";
import SearchEngine from "./SearchEngine";
import StoryGrid from "./StoryGrid";
import stories from "./stories";

function Home() {
const [keyword, setKeyword] = useState("");
  
const search = keyword.trim().toLowerCase();
  
const filteredStories = useMemo(() => {
  
return (stories ?? []).filter((story) => {
return (
  
story.title?.toLowerCase().includes(search) || 

story.summary?.toLowerCase().includes(search) ||

story.category?.toLowerCase().includes(search) ||

story.author?.toLowerCase().includes(search) 
    );
  })
  .slice()
  .sort((a, b) => new Date(b.date) - new Date(a.date));
}, [search]);

return (
    <NewsLayout>
      <SearchEngine keyword={keyword}
onKeywordChange={setKeyword}
/>

<h2>{filteredStories.length} bài viết </h2>

{filteredStories.length > 0 ? (
  <StoryGrid stories={filteredStories} />

    ): (
      <p>Không tìm thấy bài viết phù hợp</p>
    )}

    </NewsLayout>
  );
}
export default Home;


  