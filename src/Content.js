// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import ilustrador from "./assets/images/Skills/ilustrador.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mysql from "./assets/images/Skills/mysql.png";

import af from "./assets/images/Skills/after_effect.png";
import blender from "./assets/images/Skills/blender.png";
import canva from "./assets/images/Skills/canva.png";
import css from "./assets/images/Skills/css3.png";
import html from "./assets/images/Skills/html5.png";
import pr from "./assets/images/Skills/premire.png";
import js from "./assets/images/Skills/js.png";
import wp from "./assets/images/Skills/wp.png";

//Imagens empresas
import mtl from "./assets/images/Skills/mtl.png";
import iber from "./assets/images/Skills/iberdomotica.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiPhone, BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

//Imagens serviços


export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#Projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Fernando",
    LastName: "Puna",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Adobe Photoshop",
        logo: ps,
      },
      {
        name: "Adobe Ilustrador",
        logo: ilustrador,
      },
      {
        name: "Adobe Premire",
        logo: pr,
      },
      {
        name: "Adobe After Effect",
        logo: af,
      },
      {
        name: "Javascript",
        logo: js,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "MYSQL",
        logo: mysql,
      },
      
      {
        name: "Wordpress",
        logo: wp,
      },
      {
        name: "HTML 5",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Canva",
        logo: canva,
      },
      {
        name: "Figma",
        logo: figma,
      },  
      {
        name: "Blender",
        logo: blender,
      }
    ],
    icon: MdArrowForward,
  },

  jobs: {
    title: "Empresas",
    subtitle: "Recentes",
    jobs_content: [
      {
        empresa: "Multitel Telecomunicações",
        cargo: "Design Gráfico e Técnico de Marketing",
        funcao:"Progamo",
        logo: mtl,
      },
      {
        empresa: "Iberdomótica",
        cargo: "Web Developer || Remoto Job",
        funcao:"O que eu faço",
        logo: iber,
      }
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Serviços",
    subtitle: "O que faço",
    service_content: [
      {
        title: "Marketing Digital",
        para: "Acredito que cada instituição é única, com suas próprias necessidades. Por isso, considero essencial unir conceitos sólidos, storytelling envolvente e estratégias orientadas por dados (data-driven) para implementar ações de marketing eficazes. Meu objectivo é contribuir para a construção de relacionamentos fortes, tanto com o público externo quanto internamente.",
        logo: services_logo3,
      },
      {
        title: "Criação",
        para: "Criação de artes digitais e materiais para impressão em grande formato, desenvolvimento de maquetes 3D para eventos e exposições, apresentações e vídeos institucionais. Meu trabalho combina criatividade, atenção aos detalhes e soluções personalizadas para atender às necessidades de cada projecto.",
        logo: services_logo2,
      },
      {
        title: "Desenvolvimento Web",
        para: "O desenvolvimento de sistemas actualmente vai além da simples criação de funcionalidades. É necessário elaborar um plano estratégico que abranja desde a concepção do modelo de negócios até a criação do layout, priorizando a experiência do usuário dentro da plataforma.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projectos",
    subtitle: "Algumas das minhas criações",
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
      {
        title: "Creative Website",
        image: project4,
      },
    ],
  },
  Formations: {
    title: "Cursos",
    subtitle: "Formação continua",
    project_content: [
      {
        title: "Gym Website",
      },
      {
        title: "Gym Website",
      },
      {
        title: "Gym Website",
      },
      {
        title: "Gym Website",
      },
    ],
  },
  Testimonials: {
    title: "Testemunhas",
    subtitle: "O que falam sobre mim",
    testimonials_content: [
      {
        review:
          "“ É com grande prazer que escrevo esta recomendação de Fernando Mabiala. Fernando é um Técnico Sênior em Design Gráfico e Sistemas, e durante o tempo de Trabalho tenho a oportunidade de trabalhar com ele, fico impressionado com seu profissionalismo, habilidades e dedicação ao trabalho... ”",
        img: avatar1,
        link: "",
        name: "Henrique Sanjuluca || Multitel",
      },
      {
        review:
          "“O Fernando , atua brilhantemente como técnico de marketing e desenvolvedor de sistemas. Sua habilidade em unir estratégias de marketing com soluções tecnológicas é realmente impressionante. Com uma sólida experiência em desenvolvimento de sistemas, ele consegue criar plataformas que não apenas atendem às necessidades técnicas.”",
        img: avatar2,
        link: "",
        name: "Mário Pedro",
      },
      {
        review:
          "“O Fernando é um excelente profissional, com uma vasta experiência em TI, é um enorme prazer partilharmos conhecimentos.”",
        img: avatar3,
        name: "Job Vissoca || Academia Bai",
      }
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR Projects",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contacto ☎",
    social_media: [
      {
        text: "fernando-puna@hotmail.com",
        icon: GrMail,
        link: "mailto:fernando-puna@hotmail.com",
      },
      {
        text: "(+244) 930 009 134",
        icon: MdCall,
        link: "https://wa.me/930009134",
      },
      {
        text: "Fernando Puna",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/fernando-puna/",
      },
      
    ],
  },
};
