import "./Storypart.css";
import "./StoryParts.js";
function StoryPart({ image, title, content }) {
  return (
    <>
      <div className="StoryPart">
        <img src={image} className="StoryImage" alt="" />
        <div className="borderBg1"></div>
        <div className="borderBg2"></div>
        <div className="Story1Content"> 
            <h2>{content} </h2>   
        </div>
      </div>
    </>
  );
}

export default StoryPart;
