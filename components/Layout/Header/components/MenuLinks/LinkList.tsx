'use client'

import React, {Fragment, useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

interface LinkListProps {
  label: string;
  deviceType: string;
  platform: { path: string, name: string, logo: string } []
}

const LinkList = ({platform, label, deviceType}: LinkListProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
      toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  let styles;
  if (deviceType === "lg" || deviceType === "xl" || deviceType === "2xl") {
    styles = "absolute text-4 top-8 left-0 w-[595px] rounded-b-lg bg-dark-blue-blur backdrop-invert backdrop-blur-4px p-12 flex flex-wrap gap-8"
  } else {
    styles = "flex flex-wrap gap-8 rounded-b-lg bg-dark-blue-blur backdrop-invert backdrop-blur-4px p-6 items-center"
  }

  return (
    <div onClick={toggle} ref={toggleRef}
         className={`relative flex flex-col items-center cursor-pointer transition-all shrink-0 p-2`}>
      <div aria-expanded={isOpen}
           className="relative flex w-max items-center gap-[15px] hover:text-orange hover:after:scale-100 hover:after:transition hover:after:duration-500 after:w-full after:h-[1px] after:scale-0 after:absolute after:bottom-[-4px] after:bg-orange">
        <span>{label}</span>
        {isOpen ? <IoIosArrowUp size={24}/> : <IoIosArrowDown size={24}/>}
      </div>

      <motion.div
        ref={dropdownRef}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        variants={{
          open: {opacity: 1, maxHeight: "400px", marginTop: "12px", padding: "12px"},
          closed: {opacity: 0, maxHeight: "0px", marginTop: "0px", padding: "0px"}
        }}
        transition={{duration: 1}}
        style={{overflow: 'hidden'}}
        className={styles}
      >
        {platform.map(item => (
          <Fragment key={item.name}>
            <Link href={item.path} className="flex flex-col items-center gap-2 text-base">
              <Image src={item.logo} alt={item.name} width={32} height={32}/>
              {item.name}
            </Link>
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default LinkList;