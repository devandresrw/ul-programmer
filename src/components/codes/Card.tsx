import Image from 'next/image';
import { SpotlightCard } from "@/components/codes/PixelCard"

interface CardProps {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    color: string;
    onClick: () => void;
}

export const Card = ({ onClick, ...props }: CardProps) => {
    return (
        <div onClick={onClick} className="cursor-pointer">
            <SpotlightCard className="w-72 md:w-96">
                <div className="flex flex-col">
                    <div className="">
                        <Image 
                        src={props.image} 
                        alt={props.title} 
                        width={350}
                        height={250}
                        className='h-auto w-auto'
                        />
                    </div>
                </div>
            </SpotlightCard>
        </div>
    )
}