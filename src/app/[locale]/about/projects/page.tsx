import dynamic from "next/dynamic";
import React from "react";

const DynamicProjectsComponent = dynamic(
    () => import("@/components/ProjectsComponent"),
    { ssr: false }
  );
  

function Projects() {
  return (
    <section>
      <DynamicProjectsComponent/>
    </section>
    
  );
}

export default Projects;
