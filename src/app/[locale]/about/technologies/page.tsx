import React from "react";
import type { Metadata } from "next";
import { TechnologiesComponents } from "@/components";

export const metadata: Metadata = {
  title: "About Technologies",
};

const Skills = () => {
  return (
    <section>
      <TechnologiesComponents />
    </section>
  );
};

export default Skills;
