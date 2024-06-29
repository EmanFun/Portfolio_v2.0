'use client';
import { WelcomeMessageComponent } from "@/components";

import React from "react";
import Layout from "./layout";



function Page() {
  return (
    <Layout>
      <WelcomeMessageComponent />
    </Layout>
  );
}

export default Page;
