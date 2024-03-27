import React from 'react';
import Link from "next/link";
import {ROUTES} from "@/constants/Routes";

const Logo = ({width, height} : {width:number, height:number}) => {
  return (
    <Link href={ROUTES.home}>
      <img src="/logo/logo.png" alt="Game Haven" width={width} height={height}/>
    </Link>
  );
};

export default Logo;