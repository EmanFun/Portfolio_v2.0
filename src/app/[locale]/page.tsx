import React from "react";
import type { Metadata } from "next";
import { WelcomeMessageComponent } from "@/components";
import Image from "next/image";
import LandingImg from "/public/images/LandingBg.png";

export const metadata: Metadata = {
  title: "CV Emanuel Funes",
};

function Index() {
  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <Image
        src={LandingImg}
        alt="Landing background"
        fill
        style={{ objectFit: "cover", transform: "scaleX(-1)" }}
        priority
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WelcomeMessageComponent />
      </div>
    </div>
  );
}

export default Index;
