import React from "react";
import type { Metadata } from "next";
import EducationComponent from "@/components/EducationComponents";

export const metadata: Metadata = {
  title: "About Education",
};

const educationList =[
  {title: 'Lic. en Ciencias de la Computación', institution: 'UBA', type: 'Carrera Universitaria', duration: 'Grado', year: '2023'},
  {title: 'Full Stack Web Developer', institution: 'Henry', type: 'BootCamp', duration: '700Hs Teórico-Práctico', year: '2022'},

]

const Education = () => {
  return (
    <div>
      <EducationComponent data={educationList}/>
    </div>
  );
};

export default Education;
