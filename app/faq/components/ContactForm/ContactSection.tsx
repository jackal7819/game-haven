'use client'

import React, {useState} from 'react';
import ContactForm from "@/app/faq/components/ContactForm/ContactForm";
import SuccessModal from "@/app/faq/components/ContactForm/SuccessModal";

const ContactSection = () => {

  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <section className="flex flex-col mx-4 my-20 gap-[56px] md:container">
      <div className="flex flex-col gap-4">
        <h2 className="font-orbitron text-[32px] font-medium xl:text-[40px]">Didn't find what you're looking for?</h2>
        <p className="font-montserrat text-[20px] font-medium">We're here to help! If you have any questions or need
          further assistance, please fill out the form below, and our support team will get back to you as soon as
          possible.</p>
      </div>
      <div className="max-w-[784px] lg:w-[784px] m-auto w-full">
        {showSuccess ? <SuccessModal setShowSuccess={() => setShowSuccess(!showSuccess)}/>
          : <ContactForm setShowSuccess={() => setShowSuccess(!showSuccess)}/>}

      </div>
    </section>
  );
};

export default ContactSection;