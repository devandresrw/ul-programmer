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
    items-center p-3  w-full h-full md:p-8">
      <SiTypescript size={35} className="md:w-14 md:h-14"/>
      <FaNode size={30} className="md:w-14 md:h-14"/>
      <FaReact size={30} className="md:w-14 md:h-14"/>
      <RiTailwindCssFill size={30} className="md:w-14 md:h-14"/>
      <SiNextdotjs size={30} className="md:w-14 md:h-14"/>
      <SiStrapi size={30} className="md:w-14 md:h-14"/>
      <SiThreedotjs size={30} className="md:w-14 md:h-14"/>
      <SiNestjs size={30} className="md:w-14 md:h-14"/>
      <SiReactivex size={30} className="md:w-14 md:h-14"/>
      <SiMongodb size={30} className="md:w-14 md:h-14"/>
      <SiSqlite size={30} className="md:w-14 md:h-14"/>
      <SiMysql size={30} className="md:w-14 md:h-14"/>
      <BiLogoPostgresql size={30} className="md:w-14 md:h-14"/>
      <SiKubernetes size={30} className="md:w-14 md:h-14"/>
      <FaDocker size={30} className="md:w-14 md:h-14"/>
      <FaGitAlt size={30} className="md:w-14 md:h-14"/>
      <FaLinux size={30} className="md:w-14 md:h-14"/>
      <FaFigma size={30} className="md:w-14 md:h-14"/>
      <FaCpanel size={30} className="md:w-14 md:h-14"/>
    </div>
  )
}