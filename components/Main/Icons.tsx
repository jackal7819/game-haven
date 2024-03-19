import { iconsData } from "@/iconsData";
import IconItem from "@/components/Main/IconItem";

const Icons = () => {
  return (
    <div className="mx-auto mb-20 max-w-[1920px] px-40 max-[1440px]:px-28 max-xl:px-24 max-lg:px-20 max-md:px-10 max-[360px]:px-4 flex gap-x-6 max-sm:flex-col">
      {iconsData.map((item, index) => (
        <IconItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Icons;
