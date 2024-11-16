import Category from "@/components/HomePage/category/Category";
import Banner from "@/components/HomePage/Banner/Banner";
import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import PopularServices from "@/components/HomePage/PopularServices/TrendingOffers";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Category />
            <PopularServices />
            <Footer />
        </>
    );
};

export default HomePage;
