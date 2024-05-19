'use client'

import React from 'react';
import FaqSection from "@/app/faq/components/FAQ/FAQSection";
import ContactSection from "@/app/faq/components/ContactForm/ContactSection";

const FAQ = () => {
  return (
    <React.Fragment>
      <FaqSection/>
      <ContactSection/>
    </React.Fragment>
  );
};

export default FAQ;