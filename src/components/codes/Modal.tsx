'use client'
import Image from 'next/image';
import {CardItem  } from '@/components/codes/FilteredCards';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: CardItem;
}

export const Modal = ({ isOpen, onClose, card }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-zinc-900 p-6 rounded-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
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
          <p className="text-gray-300">{card.description}</p>
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