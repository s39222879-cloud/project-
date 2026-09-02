function parseDate(dateString = "") {
  const [day, month, year] = dateString.split("/");
  
  if (!day || !month || !year) {
    return new Date(0);
}

  return new Date(Number(year), Number(month) - 1, Number(day));
}

const normalizeText = (text = "") =>

String(text)
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/đ/g, "d")
  .replace(/Đ/g, "D")
  .toLowerCase()
  .trim();
  
const filteredStories = useMemo(() => {
  const keyword = normalizeText(searchKeyword);

if (!keyword) {
  return [...stories].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );
}

return [...stories]
  .filter((story) => {
    const searchable = [
      story?.title,
      story?.summary,
      story?.excerpt,
      story?.category,
      story?.author,
      
...(Array.isArray(story?.tags) ? 
story.tags : []),
    ]
    
    .filter(Boolean)
    .map(normalizeText);
    
  return searchable.some((field) => field.includes(keyword));
  })
  
  .sort((a, b) => parseDate(b.date) - parseDate(a.date));
}, [stories, searchKeyword]);
