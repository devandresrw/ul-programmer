import Link from "next/link";
import {
  FaGithub, FaMastodon, FaInstagram,
  FaHackerrank
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { SiFrontendmentor, SiCredly, SiLinkedin, SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image"

export const HomeSlide = () => {
  return (
    <>
      <div className='rounded-3xl h-full p-1 flex
      flex-col justify-center items-center gap-4 px-5'>
        <Image
          src={'/logo.svg'}
          alt="andresrw"
          priority={true}
          width={188}
          height={30}
          className='h-auto w-auto mx-auto md:w-80 md:h-20'
        />
        <h1 className="text-center">[ Frontend Engineer ]</h1>
        <div className="flex justify-center items-center gap-4 flex-wrap md:w-60">
          <Link href={'https://github.com/devandresrw'} target="_blank">
            <FaGithub className="w-7 h-7 md:w-8 md:h-8" />
          </Link>
          <Link href={'https://mastodon.social/@andresrw'} target="_blank">
            <FaMastodon className="w-7 h-7 md:w-8 md:h-8" />
          </Link>
          <Link href={'https://x.com/andresrw_dev'} target="_blank">
            <FaXTwitter className="w-7 h-7 md:w-8 md:h-8" />
          </Link>
          <Link href={'https://www.credly.com/users/andres-roldan-wilches/badges'} target='_blank'>
            <SiCredly size={30} className='md:w-8 md:h-8 lg:w-5 lg:h-5' />
          </Link>
          <Link href={'https://www.linkedin.com/in/andresrw/'} target='_blank'>
            <SiLinkedin size={25} className='md:w-8 md:h-8 lg:w-5 lg:h-5' />
          </Link>
          <Link href={'https://www.instagram.com/programmer.andresrw/'} target="_blank">
            <FaInstagram className="w-7 h-7 md:w-8 md:h-8" />
          </Link>
          <Link href={'https://www.hackerrank.com/profile/aroldan0'} target="_blank">
            <FaHackerrank className="w-7 h-7 md:w-8 md:h-8" />
          </Link>
          <Link href={'https://www.codewars.com/users/devandresrw'} target="_blank">
            <SiCodewars className="w-7 h-7 md:w-8 md:h-8" />
          </Link>
          <Link href={'https://www.frontendmentor.io/profile/amporabipo'} target="_blank">
            <SiFrontendmentor className="w-7 h-7 md:w-8 md:h-8" />
          </Link>
        </div>
      </div>
    </>
  )
}


/**
<div className="flex justify-center items-center h-screen">
        <Image
          src={'./logo.svg'}
          alt="andresrw"
          width={280}
          height={200}
          className='h-auto w-[280px] md:w-96 lg:w-72'
        />
      </div> 


      <Scene >
          <Geometryhome
            numx={0}
            numy={0}
            numz={0.001}
            position={[0, 0, 7]}
            args={[2.2, 0.6, 80, 50]}
          />
        </Scene>

 */