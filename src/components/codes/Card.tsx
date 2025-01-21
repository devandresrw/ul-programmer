import Link from 'next/link'
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
}

export const Card = ({ ...props }: CardProps) => {
    return (
        <Link href={props.link} target='_blank'>
            <SpotlightCard
                className="w-96"
            >
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
        </Link>
    )
}