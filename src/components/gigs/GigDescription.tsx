import { demoGig } from "@/lib/demoData";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "../ui/tabs";
import SellerInfo from "./SellerInfo";

const GigDescription = () => {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid grid-cols-3 w-full">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="about">About the Seller</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <div className="prose max-w-none">
          <p className="whitespace-pre-line">{demoGig.description}</p>
        </div>
      </TabsContent>
      <TabsContent value="about" className="mt-6">
        {/* seller about component */}
        <SellerInfo seller={demoGig.seller} />
      </TabsContent>
      <TabsContent value="reviews" className="mt-6">
        <div className="space-y-4">
          <p>Reviews coming soon...</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};
export default GigDescription;
