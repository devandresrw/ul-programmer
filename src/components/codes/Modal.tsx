'use client'
import Image from 'next/image';
import Link from 'next/link';
import { CardItem } from '@/components/codes/FilteredCards';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: CardItem;
}

export const Modal = ({ isOpen, onClose, card }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4
    ">
      <div className="bg-zinc-900 p-6 rounded-lg max-w-xl max-h-[34rem] w-full relative
      flex">
        <button
          onClick={onClose}
          className="absolute top-1 right-2
           text-white hover:text-gray-300
           text-lg"
        >
          ✕
        </button>
        <div className="flex flex-col gap-4">
          <Image
            src={card.image}
            alt={card.title}
            width={800}
            height={400}
            className="w-full h-auto rounded"
          />
          <h2 className="text-xl font-bold text-white">{card.title}</h2>

          <p className="text-gray-300 text-sm">{card.description}</p>
          <Link href={card.link} target='_blank'
            className='bg-zinc-800 px-3 py-1 rounded text-sm text-white
          hover:bg-zinc-700 w-48 text-center' >Ver la implementación</Link>
          <div className="flex gap-2 flex-wrap">
            {card.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-zinc-800 px-3 py-1 rounded text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};