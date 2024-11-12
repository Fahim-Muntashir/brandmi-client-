import Banner from "@/components/HomePage/Banner";
import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import PopularServices from "@/components/HomePage/PopularServices/TrendingOffers";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <PopularServices />
      <Footer />
    </>
  );
};

export default HomePage;
