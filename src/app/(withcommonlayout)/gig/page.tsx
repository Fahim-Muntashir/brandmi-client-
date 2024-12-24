import AboutGig from "@/components/gigs/AboutGig";
import GigGallery from "@/components/gigs/GigGallery";
import GigHeader from "@/components/gigs/GigHeader";
import GigPackages from "@/components/gigs/GigPackages";
import Portfolio from "@/components/gigs/Portfolio";
import UserAbout from "@/components/gigs/UserAbout";
import { gigData, portfolioData, userData } from "@/demoData/demoData";
import { demoGig } from "@/lib/demoData";

const GigPage = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left column */}
          <div className="lg:col-span-2 space-y-8 ">
            <h1 className="text-3xl font-bold mb-6">{demoGig.title}</h1>

            <GigHeader user={userData} />

            <GigGallery images={gigData.images} />
            <AboutGig
              description={gigData.description}
              features={gigData.whatYouWillGet}
            />
            <UserAbout user={userData} />
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
              <Portfolio items={portfolioData} />
            </div>
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
