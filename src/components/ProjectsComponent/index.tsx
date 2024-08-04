'use client';
import React from "react";
import {
  WrapperProjects,
  Wrapper,
  Card,
  Title,
  Text,
  Link
} from './style'

import { Each } from "@/utils/Each";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const projectsArray = [
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/', year: "2022" },
    {title:'AgileStrat', rol: 'Backend', link: 'https://agilestrat-frontend.vercel.app/', year: "2022" },
    {title: 'StarWarApi', rol: 'Backend', link: 'https://github.com/EmanFun/DockerStarWars', year: "2022" },
    {title:'HenryGaming', rol: 'FullStack', link: 'https://github.com/EmanFun/PF-HENRYGAMING', year: "2021" }, 
    {title:'PokemonApp', rol: 'FullStack', link: 'https://pokemon-six-ashy.vercel.app/', year: "2021" },
]
/* {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'},
    {title: 'PortFolio', rol: 'Frontend', link: 'https://portfolio-inky-eta-41.vercel.app/'}, */


const ProjectsComponents = () => {

  return (
    <WrapperProjects>
        <Wrapper >
          <Each of={projectsArray} render={(item, index)=>(
            <Card key={index} >
              <Title>{item.title}</Title>
              <Text>Rol: {item.rol}</Text>
              <Text>Year: {item.year}</Text>
              <Link id={`${index}`}  href={item.link} target="self">
                <FaExternalLinkSquareAlt color="black" size={30}/>
              </Link>
            </Card> 
          )}/>
        </Wrapper>
    </WrapperProjects>
  );
};

export default ProjectsComponents;