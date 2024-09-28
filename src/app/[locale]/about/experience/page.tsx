import React from "react";
import { ExperienceComponent } from "@/components";

async function Experience() {
  const experiences = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/experience`
  );
  const data = await experiences.json();
  console.log(data);
  return (
    <section>
      <ExperienceComponent />
    </section>
  );
}

export default Experience;
