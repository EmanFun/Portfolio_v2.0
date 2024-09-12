import React from "react";
import dynamic from "next/dynamic";
import { AboutComponent } from "@/components";

/* const DynamicAboutComponent = dynamic(
  () => import("@/components/AboutComponent"),
  { ssr: false }
); */

function Me() {
  return (
    <section>
      <AboutComponent />
    </section>
  );
}

export default Me;
