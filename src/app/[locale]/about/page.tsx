import React from "react";
import type { Metadata } from "next";
import { AboutComponent } from "@/components";

export const metadata: Metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <div>
      <AboutComponent />
    </div>
  );
};

export default About;
