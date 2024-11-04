import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

type ContactForm = {
  email: string;
  subject: string;
  description: string;
};

function ContactForm() {
  const form = useForm<ContactForm>();

  const onSubmit = (data: FieldValues) => {
    data;
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='flex flex-col gap-4 max-w-96 w-full mx-auto'
    >
      <input
        className='bg-primary-300 rounded-full px-6 py-3 outline-none placeholder:text-primary-700'
        placeholder='Email'
        {...form.register('email')}
      />
      <input
        className='bg-primary-300 rounded-full px-6 py-3 outline-none placeholder:text-primary-700'
        placeholder='Subject'
        {...form.register('subject')}
      />
      <textarea
        className='bg-primary-300 rounded-3xl px-6 py-3 resize-none overflow-y-auto scroll-narrow outline-none min-h-36 placeholder:text-primary-700'
        placeholder='Description'
        {...form.register('description')}
      />
      <button
        type='submit'
        className='inline-block w-full p-3 bg-primary-900 rounded-full text-primary-300'
      >
        Send Email
      </button>
    </form>
  );
}

export default ContactForm;
