"use client";
import { useState } from "react";
import BasicService from "./BasicService";
import StandardService from "./StandardService";
import PremiumService from "./PremiumService";

export function ServiceCategoryTabs() {
  const [tabNo, setTabNo] = useState(1);
  return (
    <div className="border max-w-full">
      <div className="flex w-full h-10">
        <button
          onClick={() => setTabNo(1)}
          className={`flex-1 ${
            tabNo === 1
              ? "border-black bg-white text-black border-b-2 "
              : "text-[#74767e] border-b bg-[#fafafa]"
          }`}
        >
          Basic
        </button>
        <button
          onClick={() => setTabNo(2)}
          className={`border border-t-0 flex-1 ${
            tabNo === 2
              ? "border-b-black bg-white text-black border-b-2 "
              : "text-[#74767e] border-b bg-[#fafafa]"
          }`}
        >
          Standard
        </button>
        <button
          onClick={() => setTabNo(3)}
          className={`flex-1 ${
            tabNo === 3
              ? "border-black bg-white text-black border-b-2 "
              : "text-[#74767e] border-b bg-[#fafafa]"
          }`}
        >
          Premium
        </button>
      </div>

      <div className="p-4">
        {tabNo === 1 && <BasicService />}
        {tabNo === 2 && <StandardService />}
        {tabNo === 3 && <PremiumService />}
      </div>
    </div>
  );
}
