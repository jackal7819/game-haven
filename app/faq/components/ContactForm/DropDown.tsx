'use client'

import React, {useState} from 'react';
import {useField} from "formik";
import {options} from "@/app/faq/utils/faqData";
import {CiCircleChevDown, CiCircleChevUp} from "react-icons/ci";

const DropDown = () => {
  const [field, meta, helpers] = useField("subject");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    helpers.setValue(option);
    setIsOpen(false);
  };

  return (
    <div className="relative z-10">
      <button
        type="button"
        className="h-6 w-full bg-inherit text-white flex justify-between text-[20px] font-[400]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {field.value || "Select a subject"}
        {isOpen ? <CiCircleChevUp size={26}/> : <CiCircleChevDown size={26}/>}
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white text-black border rounded-md max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="cursor-pointer p-2 hover:bg-dark-blue hover:text-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default DropDown;