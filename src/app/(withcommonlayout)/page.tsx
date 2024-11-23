import Category from "@/components/HomePage/category/Category";
import Banner from "@/components/HomePage/Banner/Banner";
import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import PopularServices from "@/components/HomePage/PopularServices/TrendingOffers";
import BusinessSolution from "@/components/HomePage/BusinessSolution/BusinessSolution";
import Members from "@/components/members/Members";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Category />
            <PopularServices />
            <BusinessSolution />
            <Members />
            <Footer />
        </>
    );
};

export default HomePage;

