'use client'
import { useState } from 'react';
import { useCategoryStore } from '@/stores/useCategoryStore';
import { Card } from '@/components/codes/Card'
import { Modal } from '@/components/codes/Modal'

export interface CardItem {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  color: string;
}

interface FilteredCardsProps {
  cards: CardItem[];
}

export const FilteredCards = ({ cards }: FilteredCardsProps) => {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);
  const selectedCategory = useCategoryStore((state) => state.category);
  const filteredCards = selectedCategory
    ? cards.filter((card) => card.category === selectedCategory)
    : cards;
  return (
    <div className='w-72 md:w-[36rem]'>
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap py-5">
        {filteredCards.map((item, index) => (
          <Card 
          key={`${item.id}-${index}`} 
          {...item} 
          onClick={() => setSelectedCard(item)}
          />
        ))}
      </div>
      {selectedCard && (
        <Modal 
          isOpen={!!selectedCard}
          onClose={() => setSelectedCard(null)}
          card={selectedCard}
        />
      )}
    </div>
  );
};