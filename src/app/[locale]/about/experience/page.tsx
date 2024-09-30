import React from "react";
import type { Metadata } from "next";
import { ExperienceComponent } from "@/components";

export const metadata: Metadata = {
  title: "About Experiences",
};

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
