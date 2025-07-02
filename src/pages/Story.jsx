import video from "../assets/review/vid.mp4";
import BurgerReviewPage from "./ChatGpt.jsx";
import FadeInUp from "../components/FadeInUp";
import StoryPart from "../components/StoryPart.jsx";
import pic1 from "../assets/review/satisfied.jpg";
import pic2 from "../assets/review/veggies.jpg";
import pic3 from "../assets/review/TopView.jpg";
function Story() {
  return (
    <FadeInUp>
      <StoryPart
        image={pic1}
        title="Satisfying customer's burger cravings since 1806."
        content=" At McDayniel's we believe a burger isn't just food — it's an experience. From the juicy, perfectly grilled patties to our fresh, fluffy buns and signature sauces, every bite is crafted to delight your taste buds. We're passionate about quality, freshness, and the joy that comey with sinking your teeth into a truly great burger. Whether you love classic cheese, spicy options, or gourmet creations piled high with toppings, our menu has something to make every burger lover smile.Come taste the difference generations have trusted, and discover why our burgers have been satisfying cravings for over two centuries."
      />
      <StoryPart
        image={pic2}
        title="Only the best, from farm to bun"
        content="At McDayniel's, freshness isn't just a promise — it's a guarantee. Every morning, we handpick locally sourced vegetables, premium cuts of meat, and artisan-baked buns to craft burgers that burst with flavor. From crispy lettuce and juicy tomatoes to house-made pickles and sauces, each ingredient tells a story of care and craftsmanship. We believe great taste starts with great ingredients — and you can taste the difference in every bite."
      />

    </FadeInUp>
  );
}
export default Story;
