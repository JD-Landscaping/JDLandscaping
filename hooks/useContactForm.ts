import { resetFormData } from "@/lib/helpers/contactFormHelpers";
import { ContactFormData } from "@/types";
import React, { useState } from "react";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send the form data to our api endpoint
      const res = await fetch(`/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        resetFormData(setFormData);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send. Try again later.");
    }
  };

  return { formData, submitted, handleChange, handleSubmit };
};
