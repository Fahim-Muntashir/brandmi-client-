import GigDescription from "@/components/gigs/GigDescription";
import GigImagesSlider from "@/components/gigs/GigImagesSlider";
import GigPackages from "@/components/gigs/GigPackages";
import SellerProfile from "@/components/gigs/SellerProfile";
import { demoGig } from "@/lib/demoData";

const GigPage = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left column */}
          <div className="lg:col-span-2 ">
            {/* title */}
            <h1 className="text-3xl font-bold mb-6">{demoGig.title}</h1>
            {/* seller profile component */}
            <SellerProfile seller={demoGig.seller} />
            {/* service image */}
            <div className="mb-8 ">
              <GigImagesSlider />
            </div>
            {/* gig description  component */}
            <GigDescription />
          </div>
          {/* right column */}
          <div className="lg:col-span-1 ">
            {/* gig package component */}
            <GigPackages packages={demoGig.packages} />
          </div>
        </div>
      </main>
    </div>
  );
};
export default GigPage;
