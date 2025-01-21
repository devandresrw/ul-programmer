'use client'
import { useCategoryStore } from '@/stores/useCategoryStore';

const cards = [
    {
        id: 1, 
        category: 'Newbie', 
        image: '', 
        title: 'title', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
    {
        id: 1, 
        category: 'Junior', 
        image: '', 
        title: 'title', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
    {
        id: 1, 
        category: 'Intermediate', 
        image: '', 
        title: 'title', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
    {
        id: 1, 
        category: 'Advanced', 
        image: '', 
        title: 'title', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
    {
        id: 1, 
        category: 'Guru', 
        image: '', 
        title: 'title', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
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
          
        </div>
      ))}
    </div>
  );
};