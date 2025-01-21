'use client'
import { useCategoryStore } from '@/stores/useCategoryStore';

const cards = [
  { id: 1, category: 'Newbie', content: 'Card 1' },
  { id: 2, category: 'Junior', content: 'Card 2' },
  { id: 3, category: 'Intermediate', content: 'Card 3' },
  { id: 4, category: 'Advanced', content: 'Card 4' },
  { id: 5, category: 'Guru', content: 'Card 5' },
  // Agrega más cards según tu JSON
];

export const FilteredCards = () => {
  const selectedCategory = useCategoryStore((state) => state.category);

  const filteredCards = selectedCategory
    ? cards.filter((card) => card.category === selectedCategory)
    : cards;

  return (
    <div className="grid gap-4">
      {filteredCards.map((card) => (
        <div key={card.id} className="card">
          {card.content}
        </div>
      ))}
    </div>
  );
};