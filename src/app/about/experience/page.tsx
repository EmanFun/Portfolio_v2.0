import React from "react";
import dynamic from "next/dynamic";

const DynamicExperienceComponent = dynamic(
  () => import("@/components/ExperienceComponent"),
  { ssr: false }
);

function Experience() {
  return (
    <section>
      <DynamicExperienceComponent />
    </section>
  );
}

export default Experience;
