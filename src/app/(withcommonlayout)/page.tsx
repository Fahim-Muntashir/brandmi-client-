import Category from "@/components/HomePage/category/Category";
import Banner from "@/components/HomePage/Banner";
import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import PopularServices from "@/components/HomePage/PopularServices/TrendingOffers";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#D1D6E2]">
        <Navbar />
        <Banner />
      </div>
      <Category />
      <PopularServices />
      <Footer />
    </>
  );
};

export default HomePage;
