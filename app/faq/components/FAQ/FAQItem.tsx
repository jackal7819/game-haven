import React from 'react';


interface FAQItemProps {
  question: string;
  id: number;
  onClick: (id: number) => void;
}

const FAQItem = ({ question, id, onClick }: FAQItemProps) => (
  <div onClick={() => onClick(id)} className="cursor-pointer font-montserrat text-[24px] font-medium">
    <h3>{question}</h3>
  </div>
);

export default FAQItem;