import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface BtnProps {
  onClick: () => void;
  direction: 'left' | 'right';
  disabled?: boolean;
}
export const Btn = ({ direction, onClick, disabled }: BtnProps) => {

  return (
    <button onClick={onClick} className="btn" disabled={disabled}>
      {direction === 'left' ? <IoIosArrowForward /> : <IoIosArrowBack />}
    </button>
  )
}