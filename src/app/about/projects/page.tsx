import { ProjectsComponent } from "@/components";
import dynamic from "next/dynamic";
import React from "react";

/* const DynamicProjectsComponent = dynamic(
    () => import("@/components/ProjectsComponent"),
    { ssr: false }
  ); */
  

function Projects() {
  return (
    <section>
      <ProjectsComponent/>
    </section>
    
  );
}

export default Projects;
