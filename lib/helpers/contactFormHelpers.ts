import { ContactFormData } from "@/types";

export const resetFormData = (setFormData: (data: ContactFormData) => void) => {
  setFormData({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
};
