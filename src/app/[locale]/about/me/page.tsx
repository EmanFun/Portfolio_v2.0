import React from "react";
import dynamic from "next/dynamic";

const DynamicAboutComponent = dynamic(
  () => import("@/components/AboutComponent"),
  { ssr: false }
);

function Me() {
  return (
    <section>
      <DynamicAboutComponent />
    </section>
  );
}

export default Me;
