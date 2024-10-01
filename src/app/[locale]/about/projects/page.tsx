import React from "react";
import type { Metadata } from "next";
import { ProjectsComponent } from "@/components";

export const metadata: Metadata = {
  title: "About Projects",
};

async function Projects() {
  const experiences = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
    { cache: "no-store" }
  );
  const result = await experiences.json();
  return (
    <section>
      <ProjectsComponent data={result.data} />
    </section>
  );
}

export default Projects;
