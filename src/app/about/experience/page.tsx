import React from "react";
import dynamic from "next/dynamic";
import { ExperienceComponent } from "@/components";

/* const DynamicExperienceComponent = dynamic(
  () => import("@/components/ExperienceComponent"),
  { ssr: false }
); */

function Experience() {
  return (
    <section>
      <ExperienceComponent />
    </section>
  );
}

export default Experience;
