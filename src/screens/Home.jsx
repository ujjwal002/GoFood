/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <div className="m-3">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
