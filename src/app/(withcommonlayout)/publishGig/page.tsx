"use client";
import { GigFormContent } from "@/components/gigs/gigForm/GigFormContent";
import GigFormProcessing from "@/components/gigs/gigForm/GigFormProcessing";
import GIgFormTabs from "@/components/gigs/gigForm/GIgFormTabs";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { gigFormState } from "@/globalStore/gigFormState";
import { useEffect } from "react";

const PublishGig = () => {
  const { currentTab, getProgress, setCurrentTab } = gigFormState();
  // Scroll to the top when currentTab changes
  useEffect(() => {
    window.scrollTo({
      top: 30, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  }, [currentTab]);
  return (
    <main className=" container mx-auto flex items-center justify-center px-4 py-8 mb-36">
      <Card className="p-6 min-w-[600px]">
        {/* gig form processing header */}
        <GigFormProcessing progress={getProgress()} currentTab={currentTab} />
        {/* tabs */}
        <Tabs
          value={currentTab}
          onValueChange={() => {
            return false;
          }}
        >
          <GIgFormTabs currentTab={currentTab} onTabChange={setCurrentTab} />
          <GigFormContent />
        </Tabs>
      </Card>
    </main>
  );
};
export default PublishGig;
