import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";

interface BtnProps {
  onClick: () => void;
  direction: 'left' | 'right';
  disabled?: boolean;
}
export const Btn = ({
  direction,
  onClick,
  disabled }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(`
        absolute
        border-[1px]
        border-white
        rounded-full
        p-4
        bottom-14
        md:p-7
        md:bottom-8
        glassbtn
        lg:bottom-[45%]
        lg:p-5
        hover:bg-mbtnglass
        `, {
        ['left-12 md:left-40']: direction === 'left',
        ['right-12 md:right-40']: direction === 'right',
      })}
      disabled={disabled}>
      {direction === 'left'
        ? <IoIosArrowBack className="size-3" />
        : <IoIosArrowForward className="size-3" />}
    </button>
  )
}