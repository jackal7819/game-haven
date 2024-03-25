import React from 'react';
import {IoMdClose} from "react-icons/io";
import Logo from "@/components/common/Logo/Logo";
import Link from "next/link";
import {motion} from "framer-motion";
import {ROUTES} from "@/constants/Routes";
import MenuLinksHeader from "@/components/Layout/Header/components/MenuLinks/MenuLinksHeader";
import {CiHeart, CiLogin} from "react-icons/ci";


const DropDown = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      variants={{
        open: {opacity: 1, y: 0, height: "100vh", padding: "32px 40px"},
        closed: {opacity: 0, y: "-100%",height: "0px", padding: "0px 0px", overflow: "hidden"},
      }}
      transition={{duration: 0.5}}
      className="flex flex-col items-center gap-8 bg-linear-blur backdrop-blur-md absolute w-full top-0"
    >
      <IoMdClose size={34} onClick={() => setIsOpen(!isOpen)}
                 className="self-end cursor-pointer absolute top-6 right-11"/>
      <Logo width={120} height={60}/>
      <MenuLinksHeader/>
      <div className="flex items-center gap-4">
        <Link href={ROUTES.login} className="flex items-centery text-[20px] gap-4 font-medium">Log in <CiLogin size={32}/> </Link>
        <Link href={ROUTES.favorites}><CiHeart size={32}/></Link>
      </div>
    </motion.div>
  );
};

export default DropDown;