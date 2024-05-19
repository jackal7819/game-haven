'use client'

import React, {useState} from 'react';
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import FAQItem from "@/app/faq/components/FAQ/FAQItem";

interface QuestionItem {
  readonly id: number;
  question: string;
  answer: string;
}

interface QuestionCategoryProps {
  title: string;
  subtitle: string;
  questions: QuestionItem[];
  onClick: (index: number) => void;
}

const QuestionCategory: React.FC<QuestionCategoryProps> = ({title, subtitle, questions, onClick, ...rest}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4" {...rest}>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h2 className="font-montserrat text-[32px] font-medium">{title}</h2>
          <p className="font-montserrat text-[20px] text-blue font-[400]">{subtitle}</p>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer w-[33px] h-[33px]'>
          {!isOpen ? <CiCirclePlus size={33}/> : <CiCircleMinus size={33}/>}
        </div>
      </div>
      {isOpen &&
        <div className="flex flex-col gap-5 px-4 py-2">
          {questions.map((item) => (
            <FAQItem
              key={item.id}
              id={item.id}
              question={item.question}
              onClick={onClick}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default QuestionCategory;