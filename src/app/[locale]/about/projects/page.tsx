import React from "react";
import type { Metadata } from "next";
import { ProjectsComponent } from "@/components";

export const metadata: Metadata = {
  title: "About Projects",
};

async function Projects() {
  const experiences = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`
  );
  const data = await experiences.json();
  console.log(data);
  return (
    <section>
      <ProjectsComponent />
    </section>
  );
}

export default Projects;
