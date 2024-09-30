import React from "react";
import { ProjectsComponent } from "@/components";

async function Projects() {
  const experiences = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
  );
  const data = await experiences.json();
  console.log(data);
  return (
    <section>
      <ProjectsComponent/>
    </section>
    
  );
}

export default Projects;
