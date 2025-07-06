import "./Storypart.css";
import "../pages/Responsive design/TabStoryPart.css";
function StoryPart({ image, title, content }) {
  return (
    <>
      <div className="StoryPart">
        <img src={image} className="StoryImage" alt="" />
        <div className="borderBg1"></div>
        <div className="Story1Content"> 
            <h1> {title} </h1>
            <p>{content} </p>   
        </div>
      </div>
    </>
  );
}

export default StoryPart;
