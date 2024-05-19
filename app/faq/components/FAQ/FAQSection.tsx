import React, {useState} from 'react';
import {faqData} from "@/app/faq/utils/faqData";
import QuestionCategory from "@/app/faq/components/FAQ/QuestionCategory";
import {IoChevronBackCircleOutline} from "react-icons/io5";

const FaqSection = () => {
  const [activeTab, setActiveTab]=useState("list")
  const [activeQuestion, setActiveQuestion] = useState<{ id: number; question: string; answer: JSX.Element | string; } | null>(null);

  const onQuestionClick = (id: number) => {
    const question = faqData
      .flatMap((category) => category.questions)
      .find((q) => q.id === id);

    setActiveTab('answer');
    setActiveQuestion(question || null);
  };

  const onBackClick = () => {
    setActiveTab('list');
    setActiveQuestion(null);
  };

  return (
    <section className="flex flex-col mx-4 my-20 gap-14 md:container">
      <h1 className="font-orbitron text-[32px] font-medium xl:text-[40px]">Frequent questions</h1>
      <div className="w-full">
        {activeTab === 'list' ? (
          <div className="flex flex-col gap-8 w-full max-w-[752px] m-auto">
            {faqData.map((item) => (
              <QuestionCategory
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                questions={item.questions}
                onClick={onQuestionClick}
              />
            ))}
          </div>
        ) : (
          <div className="w-full relative mt-5 lg:mt-0">
            <IoChevronBackCircleOutline onClick={onBackClick} size={33}
                                        className='absolute top-[-50px] lg:top-0 left-0 cursor-pointer'/>
            <div className="max-w-[752px] m-auto  font-montserrat text-[24px] font-medium">
              {activeQuestion && (
                <div className="font-montserrat flex flex-col gap-4">
                  <h3 className="text-[24px] font-medium">{activeQuestion.question}</h3>
                  <div className="text-[20px] font-[400]" dangerouslySetInnerHTML={{__html: activeQuestion.answer}}/>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;