import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabType } from "@/hooks/useGigForm";
interface GigFormTabsProps {
  currentTab: TabType;
  onTabChange: (value: TabType) => void;
}
const GIgFormTabs = ({ currentTab, onTabChange }: GigFormTabsProps) => {
  return (
    <TabsList className="grid  grid-cols-4 mb-8 gap-3">
      <TabsTrigger
        value={currentTab}
        disabled={currentTab !== "overview"}
        onClick={() => onTabChange("overview")}
      >
        Overview
      </TabsTrigger>
      <TabsTrigger
        value={currentTab}
        disabled={currentTab !== "pricing"}
        onClick={() => onTabChange("pricing")}
      >
        Package
      </TabsTrigger>
      <TabsTrigger
        value={currentTab}
        disabled={currentTab !== "description"}
        onClick={() => onTabChange("description")}
      >
        Description
      </TabsTrigger>
      <TabsTrigger
        value={currentTab}
        disabled={currentTab !== "gallery"}
        onClick={() => onTabChange("gallery")}
      >
        Gallery
      </TabsTrigger>
    </TabsList>
  );
};
export default GIgFormTabs;
