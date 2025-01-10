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
        p-3
        absolute
        top-1/2
        glassbtn
        hover:bg-mbtnglass
        `, {
        ['left-3']: direction === 'left',
        ['right-3']: direction === 'right',
      })}
      disabled={disabled}>
      {direction === 'left'
        ? <IoIosArrowBack />
        : <IoIosArrowForward />}
    </button>
  )
}