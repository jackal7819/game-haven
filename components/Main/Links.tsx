import Link from "next/link";
import Image from "next/image";

import joystick from "../../public/linkIcons/joystick.svg";
import calendar from "../../public/linkIcons/calendar.svg";
import percent from "../../public/linkIcons/percent.svg";
import paper from "../../public/linkIcons/paper.svg";

// background: linear-gradient(180deg, rgba(0, 32, 79, 0.6) 0%, rgba(0, 114, 220, 0.6) 100%);
const Links = () => {
  const gradientClasses =
    " bg-gradient-to-b from-[rgba(0,32,79,0.6)] from-0% to-[rgba(0,114,220,0.6)] to-100% rounded-2xl hover:shadow-[0_4px_32px_0_rgba(211,226,255,0.3)]";
  const textClasses = " text-[32px] max-[1100px]:text-2xl font-medium";

  return (
    <div className="mx-auto mb-20 max-w-[1920px] px-40 max-[1440px]:px-28 max-xl:px-24 max-lg:px-20 max-md:px-10 max-[360px]:px-4 flex text-center gap-x-4 max-[655px]:flex-col max-[655px]:gap-y-4">
      <Link
        href="/"
        className={` max-[655px]:py-10 flex-[1_1_30%] max-xl:flex-[1_1_28%] flex justify-center items-center relative  ${gradientClasses} ${textClasses}`}
      >
        Pre-orders
        <Image src={joystick} alt="" className="absolute bottom-0 left-0 max-[655px]:hidden" />
      </Link>
      <div className="flex flex-col flex-[1_1_40%] max-xl:flex-[1_1_44%] justify-between gap-y-3">
        <Link
          href="/"
          className={`py-[70px] max-[1440px]:py-14 max-[655px]:py-10 relative min-[656px]:max-[968px]:text-right px-2  ${gradientClasses} ${textClasses}`}
        >
          Upcoming
          <Image
            src={calendar}
            alt=""
            className="absolute top-[50%] translate-y-[-50%] left-0 max-[655px]:hidden"
          />
        </Link>
        <Link
          href="/"
          className={`py-[70px] max-[1440px]:py-14 max-[655px]:py-10 relative min-[656px]:max-[968px]:text-left px-2 ${gradientClasses} ${textClasses}`}
        >
          Sales
          <Image
            src={percent}
            alt=""
            className="absolute top-[50%] translate-y-[-50%] right-0 max-[655px]:hidden"
          />
        </Link>
      </div>
      <Link
        href="/"
        className={`max-[655px]:py-10 flex-[1_1_30%] max-xl:flex-[1_1_28%] flex justify-center items-center relative ${gradientClasses} ${textClasses}`}
      >
        News
        <Image src={paper} alt="" className="absolute bottom-0 right-0 max-[655px]:hidden" />
      </Link>
    </div>
  );
};

export default Links;
