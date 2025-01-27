'use client'
import {useCategoryStore} from '@/stores/useCategoryStore'
import { SpotlightCard} from "@/components/codes/PixelCard";

interface CategoryButtonsProps {
    categories: string[];
}

export const CategoryButtons = ({categories}:CategoryButtonsProps) =>{
   const category = useCategoryStore((state) => state.category);
   const setCategory = useCategoryStore((state) => state.setCategory);
   
    return(
        <div className='flex items-center gap-2 justify-center flex-wrap'>
            <SpotlightCard
                className={`px-4 py-1 ${category} hover:cursor-pointer`}
                onClick={() => setCategory(null)}
            >
                All
            </SpotlightCard>
            {categories.map((category) => (
                <SpotlightCard
                className='px-4 py-1 hover:cursor-pointer'
                key={category}
                onClick={() => setCategory(category)}
            >
                {category}   
            </SpotlightCard>
            ))}
        </div>
    )
}