import React from 'react';
import EmailIcon from '../../../../components/icons/EmailIcon';
import PhoneIcon from '../../../../components/icons/PhoneIcon';
import FileIcon from '../../../../components/icons/FileIcon';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section className='py-12'>
      <h2 className='text-center font-serif'>Contact</h2>
      <div className='grid mb-10 grid-cols-2 mx-auto max-w-5xl mt-12'>
        <div className=' max-w-96 mx-auto flex flex-col gap-6'>
          <h4>Info</h4>
          <p className='flex gap-2 items-center'>
            <EmailIcon className='w-6' />
            <span>{' - taylorgkelley@outlook.com'}</span>
          </p>
          <p className='flex gap-2 items-center'>
            <PhoneIcon className='w-6' />
            <span>{' - (334) 365-8105'}</span>
          </p>
          <a
            href='/public/Files/resume.pdf'
            target='_blank'
            className='py-3 px-10 mt-6 bg-primary-900 mx-auto text-primary-300 flex gap-3 rounded-full w-52 justify-center items-center'
          >
            <FileIcon className='h-6' />
            Resume
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
