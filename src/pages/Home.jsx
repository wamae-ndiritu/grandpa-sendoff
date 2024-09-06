import Biography from "../components/Biography";
import HeroSection from "../components/HeroSection";
import HymnSection from "../components/HymnSection";
import LifeSection from "../components/LifeSection";
import Memories from "../components/Memories";
import Tributes from "../components/Tributes";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LifeSection />
      <HymnSection />
      <Biography />
      <Memories />
      <Tributes />
    </>
  );
};

export default Home;
