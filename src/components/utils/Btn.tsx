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
        border-[1px]
        border-white
        rounded-full
        p-4
        md:p-8
        absolute
        bottom-6
        md:bottom-28
        glassbtn
        hover:bg-mbtnglass
        `, {
        ['left-7 md:left-20']: direction === 'left',
        ['right-6 md:right-20']: direction === 'right',
      })}
      disabled={disabled}>
      {direction === 'left'
        ? <IoIosArrowBack className="size-5" />
        : <IoIosArrowForward className="size-5" />}
    </button>
  )
}