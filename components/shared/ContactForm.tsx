"use client";

import { useState } from "react";
import InputField from "@/components/ui/InputField";
import Button from "../ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    // services: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, checked } = e.target;

  //   setFormData((prevData) => {
  //     const newServices = checked
  //       ? [...prevData.services, value]
  //       : prevData.services.filter((service) => service !== value);

  //     return { ...prevData, services: newServices };
  //   });
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Send the full formData
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send. Try again later.");
    }
  };

  return submitted ? (
    <div className='text-center p-10 bg-accent rounded-xl'>
      <h3 className='text-2xl font-semibold text-primary'>Thank you!</h3>
      <p className='text-lg mt-2'>
        Your message has been sent successfully. We’ll be in touch soon.
      </p>
    </div>
  ) : (
    <form
      className='bg-accent p-4 rounded-xl flex flex-col gap-2 md:gap-3'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col md:flex-row gap-1 md:gap-3'>
        <InputField
          label='First Name'
          type='text'
          name='firstname'
          id='firstname'
          value={formData.firstname}
          onChange={handleChange}
          placeholder='first name'
        />
        <InputField
          label='Last Name'
          type='text'
          name='lastname'
          id='lastname'
          value={formData.lastname}
          onChange={handleChange}
          placeholder='last name'
        />
      </div>

      <InputField
        label='Email'
        type='text'
        name='email'
        id='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='email'
      />
      <InputField
        label='Phone'
        type='text'
        name='phone'
        id='phone'
        value={formData.phone}
        onChange={handleChange}
        placeholder='Phone'
      />
      <div className='relative'>
        <label
          htmlFor='message'
          className='subtitle-text mx-2'
        >
          Message
        </label>
        <textarea
          name='message'
          id='message'
          value={formData.message}
          onChange={handleChange}
          className='input-field'
          placeholder='message'
          rows={15}
          required
        />
      </div>
      {/* <div>
        <label
          htmlFor='services'
          className='subtitle-text mx-2'
        >
          Services Intrests
        </label>
        <div className='grid grid-cols-2 gap-x-6 gap-y-3 m-2 md:m-5'>
          {services.map((service) => (
            <label
              key={service.name}
              className='flex items-center gap-x-2 text-primary text-xs md:text-base'
            >
              <input
                type='checkbox'
                value={service.name}
                checked={formData.services.includes(service.name)}
                onChange={handleCheckboxChange}
                className='w-4 md:w-5 accent-primary rounded border border-gray-border transition duration-150'
              />
              {service.name}
            </label>
          ))}
        </div>
      </div> */}
      <div className='flex justify-center items-center'>
        <Button
          type='submit'
          label='Send message'
          primary={false}
          customClass='px-20'
        />
      </div>
    </form>
  );
}
