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
    items-center p-3 h-full w-full">
      <SiTypescript size={30} />
      <FaNode size={30} />
      <FaReact size={30} />
      <RiTailwindCssFill size={30} />
      <SiNextdotjs size={30} />
      <SiStrapi size={30} />
      <SiThreedotjs size={30} />
      <SiNestjs size={30} />
      <SiReactivex size={30} />
      <SiMongodb size={30} />
      <SiSqlite size={30} />
      <SiMysql size={30} />
      <BiLogoPostgresql size={30} />
      <SiKubernetes size={30} />
      <FaDocker size={30} />
      <FaGitAlt size={30} />
      <FaLinux size={30} />
      <FaFigma size={30} />
      <FaCpanel size={30} />
    </div>
  )
}