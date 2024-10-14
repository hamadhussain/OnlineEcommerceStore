import EmblaCarousel from "./EmblaCarousel/page";
import Logos from "./Logos/page";
import Poster from "./Poster/page";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const HeroSection = () => (
  <section className="relative overflow-hidden h-">
    <div className=" pb-24">
      <Logos slides={SLIDES} options={OPTIONS} />
      <Poster />
    </div>
    {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
  </section>
);

export default HeroSection;
