import React from 'react';
import {FaRegThumbsUp} from "react-icons/fa";
import {IoCloseCircleOutline} from "react-icons/io5";

const SuccessModal = ({setShowSuccess} : {setShowSuccess: () => void}) => {
  return (
    <div className="border rounded border-b-amber-50 flex flex-col gap-8 justify-center items-center p-10 relative">
      <IoCloseCircleOutline size={33} onClick={setShowSuccess} className="absolute top-3 right-3 cursor-pointer"/>
      <FaRegThumbsUp size={60}/>

      <p className="text-[24px] text-white text-center">
        Thank you!
      </p>
      <p className="text-[24px] text-white text-center">
        We received your message! We'll contact you as soon as possible!
      </p>
    </div>
  );
};

export default SuccessModal;