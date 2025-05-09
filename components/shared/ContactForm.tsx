"use client";

import InputField from "@/components/ui/InputField";
import Button from "../ui/Button";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactForm() {
  const { formData, submitted, handleChange, handleSubmit } = useContactForm();

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
