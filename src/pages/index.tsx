import { WelcomeMessageComponent } from "@/components";
import { LayoutLanding } from "@/layouts";
import React from "react";

interface indexProps {};

function index({}: indexProps) {
  return (
    <LayoutLanding>
        <WelcomeMessageComponent/>
    </LayoutLanding>
  ) ;
}

export default index;
