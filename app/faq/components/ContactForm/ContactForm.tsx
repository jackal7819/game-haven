'use client'

import React from 'react';
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {options} from "@/app/faq/utils/faqData";
import DropDown from "@/app/faq/components/ContactForm/DropDown";

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

interface IContactForm {
  setShowSuccess: () => void;
}


const ContactForm = ({setShowSuccess} : IContactForm) => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const onSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log(values);

    setShowSuccess()
    setSubmitting(false);

  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
    >
      {({ errors, isSubmitting }) => (
        <Form className="w-full flex flex-col gap-6">
          <div className="h-[96px]">
            <label htmlFor="name" className="font-montserrat text-[20px] font-[400]">Your Name</label>
            <Field
              id="name"
              name="name"
              className="mt-[12px] p-2 rounded-md w-full bg-white text-black placeholder:text-grey"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="email" className="font-montserrat text-[20px] font-[400]">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              className="mt-[12px] p-2 rounded-md w-full bg-white text-black placeholder:text-grey"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <DropDown/>

          <div>
            <label htmlFor="message" className="font-montserrat text-[20px] font-[400]">Message</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className="mt-[12px] p-2 rounded-md w-full bg-white text-black placeholder:text-grey"
              placeholder="Write your message"
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <button type='submit'
                    className="w-full bg-orange flex justify-center items-center rounded-2xl text-light font-normal text-2xl px-8 py-4 disabled:opacity-75"
                    disabled={!!errors.email || !!errors.name || !!errors.subject || !!errors.message}>
              Send the message
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;