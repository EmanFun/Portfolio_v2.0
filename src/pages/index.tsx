import { WelcomeMessageComponent } from "@/components";
import { LayoutLanding } from "@/layouts";
import React from "react";



function index() {
  return (
    <LayoutLanding>
      <WelcomeMessageComponent />
    </LayoutLanding>
  );
}

export default index;
