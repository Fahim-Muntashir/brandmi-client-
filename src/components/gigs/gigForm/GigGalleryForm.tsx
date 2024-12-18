/* eslint-disable @typescript-eslint/no-explicit-any */
import GigButtons from "../gigButtons";
import { UseForm } from "@/components/customForm/UseForm";

import { gigFormState } from "@/globalStore/gigFormState";

const GigGalleryForm = () => {
  const { currentTab, setCurrentTab, formData } = gigFormState();

  const handleSubmit = () => {};
  return (
    <UseForm onSubmit={handleSubmit} defaultValues={formData}>
      <GigButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </UseForm>
  );
};

export default GigGalleryForm;
