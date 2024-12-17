import UseInput from "@/components/customForm/UseInput";
import UseTextarea from "@/components/customForm/UseTextarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { gigFormState } from "@/globalStore/gigFormState";
import { Plus } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const { formData } = gigFormState();
  const faqs: FAQ[] = formData.description.faqs;
  const [questions, setQuestion] = useState<FAQ[]>([...faqs]);
  const addFAQ = () => {
    setQuestion((prev) => [...prev, { question: "", answer: "" }]);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Label>FAQs</Label>
        <Button type="button" variant="outline" size="sm" onClick={addFAQ}>
          <Plus className="h-4 w-4 mr-2" /> Add FAQ
        </Button>
      </div>
      <div>
        {questions.map((item, index) => {
          return (
            <div key={index}>
              <UseInput
                name={`faqs.${index}.question`}
                type="text"
                label="Question"
              />
              <UseTextarea name={`faqs.${index}.answer`} label="Answer" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FAQSection;
