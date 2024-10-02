import React from "react";
import type { Metadata } from "next";
import { WelcomeMessageComponent } from "@/components";

export const metadata: Metadata = {
  title: "CV Emanuel Funes",
};

function Index() {
  return (
    <div>
      <WelcomeMessageComponent />
    </div>
  );
}

export default Index;
