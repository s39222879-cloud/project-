import { useEffect, useState } from "react";

function calculateReadingProgress() {
const { scrollTop, scrollHeight } = document.documentElement;
const viewportHeight = window.innerHeight;
  
const scrollableHeight = scrollHeight - viewportHeight;

// không có vùng để cuộn 
if (scrollableHeight <= 0) {
  return 0;
}

const progress = (scrollTop / scrollableHeight) * 100;

// giới hạn trong khoảng 0 - 100
return Math.min(100, Math.max(0, progress));
}

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(() => calculateReadingProgress()
  );
  
useEffect(() => {
  let animationFrameId = null;
    
const updateProgress = () => {
  if (animationFrameId !== null) {
    return;
  }
  
animationFrameId = window.requestAnimationFrame(() => {

setProgress(calculateReadingProgress());
animationFrameId = null;
  });
};

updateProgress();

window.addEventListener("scroll", updateProgress, {
  passive: true,
});

window.addEventListener("resize", updateProgress);

return () => {
  window.removeEventListener("scroll", updateProgress);
  window.removeEventListener("resize", updateProgress);
  
  if (animationFrameId !== null) {
    
window.cancelAnimationFrame(animationFrameId);
    }
  };
}, []);

return (
  <div aria-hidden="true" className="reading-progress" style={{
    transform: `scaleX(${progress / 100})`,
    transformOrigin: "left center",
  }}/>
  );
}
