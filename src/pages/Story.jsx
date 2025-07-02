import React from "react";
import FadeInUp from "../components/FadeInUp";
import StoryPart from "../components/StoryPart.jsx";
import pic1 from "../assets/review/satisfied.jpg";
import pic2 from "../assets/review/veggies.jpg";
import pic3 from "../assets/review/TopView.jpg";
import pic4 from "../assets/review/share2.jpg";
import pic5 from "../assets/review/cheesy.jpg";
import pic6 from "../assets/review/sweet.jpg";
import Footer from "../components/Footer.jsx";
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
      <StoryPart
        image={pic5}
        title="Crafted, Not Just Cooked"
        content="At McDayniel's, every burger starts as an idea — a blend of flavors, textures, and creativity.We handshape our patties, toast every bun to golden perfection, and layer ingredients like edible art.It's not just about filling an order; it's about creating a moment worth savoring.From the first sizzle to the final bite, every burger is a masterpiece in its own right."
      />

      <StoryPart
        image={pic4}
        title="More Than Just a Burger"
        content="At McDayniel's, it's not only about what's on your plate — it's about who you share it with. We believe burgers taste best when paired with laughter, stories, and moments that matter. From family dinners to late-night hangouts with friends, our space is built to bring people together over the food they love. Because in the end, great burgers create great memories."
      />
      <Footer />
    </FadeInUp>
  );
}
export default Story;
