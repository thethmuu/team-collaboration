import Articles from "./components/Articles";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import New from "./components/New";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Articles />
      <New />
    </>
  );
};

export default App;
