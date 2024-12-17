/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { GigFormContent } from "@/components/gigs/gigForm/GigFormContent";
import GigFormProcessing from "@/components/gigs/gigForm/GigFormProcessing";
import GIgFormTabs from "@/components/gigs/gigForm/GIgFormTabs";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { useGigForm } from "@/hooks/useGigForm";

const CreateGig = () => {
  const { currentTab, formData, getProgress, updateFormData, setCurrentTab } =
    useGigForm();

  return (
    <main className=" container mx-auto flex items-center justify-center px-4 py-8">
      <Card className="p-6 min-w-[600px]">
        {/* gig form processing header */}
        <GigFormProcessing progress={getProgress()} currentTab={currentTab} />
        {/* tabs */}
        <Tabs
          value={currentTab}
          onValueChange={(value: any) => setCurrentTab(value)}
        >
          <GIgFormTabs currentTab={currentTab} onTabChange={setCurrentTab} />
          <GigFormContent
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            formData={formData}
            updateFormData={updateFormData}
          />
        </Tabs>
      </Card>
    </main>
  );
};
export default CreateGig;
