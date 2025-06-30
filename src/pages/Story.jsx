import video from "../assets/review/vid.mp4";
import BurgerReviewPage from "./ChatGpt.jsx";
import FadeInUp from "../components/FadeInUp";
import StoryPart from "../components/StoryPart.jsx";
import pic1 from '../assets/review/satisfied.jpg'
function Story() {
  return (
    <FadeInUp>
        <StoryPart image={pic1} content= "Satisfying customer's burger need since 1806" />
      {/* <BurgerReviewPage /> */}
    </FadeInUp>
  );
}
export default Story;
