/**
 FaReact,
  SiTypescript,
  SiNextdotjs,
 SiThreedotjs,
 RiTailwindCssFill

 SiNestjs,
 SiReactivex,
 FaNode,
  FaDocker,
  BiLogoPostgresql
 */
import {
  SiNestjs,
  SiReactivex,
  SiNextdotjs,
  SiTypescript,
  SiThreedotjs,
  SiMongodb,
  SiSqlite,
  SiKubernetes,
  SiMysql,
  SiStrapi
} from "react-icons/si";
import {
  FaReact,
  FaLinux,
  FaFigma,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaCpanel,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";


export const SkillsSlide = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5
    items-center p-3  w-full h-full md:p-8 lg:gap-3">
      <SiTypescript size={35} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <FaNode size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <FaReact size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <RiTailwindCssFill size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiNextdotjs size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiStrapi size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiThreedotjs size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiNestjs size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiReactivex size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiMongodb size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiSqlite size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiMysql size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <BiLogoPostgresql size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <SiKubernetes size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <FaDocker size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <FaGitAlt size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <FaLinux size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <FaFigma size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
      <FaCpanel size={30} className="md:w-14 md:h-14 lg:w-9 lg:h-9"/>
    </div>
  )
}