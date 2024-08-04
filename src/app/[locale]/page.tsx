'use client';
import { WelcomeMessageComponent } from "@/components";

import React from "react";
import RootLayout from "./layout";



function Index() {
  return (
    <RootLayout>
      <WelcomeMessageComponent />
    </RootLayout>
    
  );
}

export default Index;
