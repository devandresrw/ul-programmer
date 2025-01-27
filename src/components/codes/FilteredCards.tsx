'use client'
import { useCategoryStore } from '@/stores/useCategoryStore';
import {Card} from '@/components/codes/Card'

const cards = [
    {
        id: 1, 
        category: 'Newbie', 
        image: '/ceo.jpg', 
        title: 'NAme reto reto obvio', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
    {
        id: 1, 
        category: 'Junior', 
        image: '/ceo.jpg', 
        title: 'title', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
    {
        id: 1, 
        category: 'Intermediate', 
        image: '/ceo.jpg', 
        title: 'title', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
    {
        id: 1, 
        category: 'Advanced', 
        image: '/ceo.jpg', 
        title: 'title', 
        description: 'lorem lorem', 
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
        link: '',
        color: ''
    },
    {
        id: 1, 
        category: 'Guru', 
        image: '/ceo.jpg', 
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
    <div className='w-72 md:w-[36rem]'>
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap py-5">
      {filteredCards.map((item,index) => (
        <Card key={`${item}-${index}`} {...item} />
      ))}
    </div>
    </div>
  );
};