import stories from "./stories";
import PropTypes from "prop-types";
import "./search-engine.css";

function SearchEngine({ keyword, onKeywordChange, totalStories }) {
  
  const handleChange = (event) => {
    onKeywordChange(event.target.value);
};
  
return (
<section className="search-engine">
  
<label htmlFor="search-engine-input" className="sr-only">
  Tìm kiếm bài báo</label>

<input id="search-engine-input" type="search" className="search-engine-input" placeholder="Tìm kiếm bài báo..." value={keyword} onChange={handleChange} autoComplete="off" aria-label="Tìm kiếm bài báo"/>

<p className="story-count">Tổng Bài Viết:{totalStories}</p>
    </section>
  );
}

SearchEngine.propTypes = {
  keyword: PropTypes.string,
  onKeywordChange: PropTypes.func,
  totalStories: PropTypes.number,
},

SearchEngine.defaultProps = {
  keyword: "",
  onKeywordChange: () => {},
  totalStories: 0,
};

export default SearchEngine;
