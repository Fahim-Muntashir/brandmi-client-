import Category from "@/components/HomePage/category/Category";
import Banner from "@/components/HomePage/Banner/Banner";
import PopularServices from "@/components/HomePage/PopularServices/TrendingOffers";
import BusinessSolution from "@/components/HomePage/BusinessSolution/BusinessSolution";
import Members from "@/components/members/Members";
import GoogleOneTapLogin from "@/auth/GoogleOneTap";

const HomePage = () => {
  return (
    <>
      <GoogleOneTapLogin />
      <Banner />
      <Category />
      <PopularServices />
      <BusinessSolution />
      <Members />
    </>
  );
};

export default HomePage;
