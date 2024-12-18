import UseInput from "@/components/customForm/UseInput";
import UseTextarea from "@/components/customForm/UseTextarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { gigFormState } from "@/globalStore/gigFormState";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const { formData } = gigFormState();
  const faqs: FAQ[] = JSON.parse(JSON.stringify(formData.description.faqs)); // Deep copy to avoid reference issues.
  const [questions, setQuestion] = useState<FAQ[]>([...faqs]);

  const addFAQ = () => {
    setQuestion((prev) => [...prev, { question: "", answer: "" }]);
  };

  const removeFaq = (index: number) => {
    // Create a new array by filtering out the FAQ at the specified index.
    const updatedFaqs = questions.filter((_, i) => i !== index);
    setQuestion(updatedFaqs); // Update state with a fresh array reference.
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <Label>FAQs</Label>
        <Button type="button" variant="outline" size="sm" onClick={addFAQ}>
          <Plus className="h-4 w-4 mr-2" /> Add FAQ
        </Button>
      </div>
      <div>
        {questions.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-1">
              <UseInput
                name={`faqs.${index}.question`}
                type="text"
                label="Question"
              />
              <UseTextarea name={`faqs.${index}.answer`} label="Answer" />
            </div>
            <Button
              onClick={() => removeFaq(index)}
              size={"icon"}
              type="button"
            >
              <X className="" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
