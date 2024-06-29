'use client';
import React from "react";
import Layout  from "./layout";
import dynamic from "next/dynamic";

const DynamicHeaderComponent = dynamic(() => import('@/components/HeaderComponent'), { ssr: false });
const DynamicContactComponent = dynamic(() => import('@/components/ContactComponent'), { ssr: false });
const DynamicAboutComponent = dynamic(() => import('@/components/AboutComponent'), { ssr: false });

function Page() {
  return (
    <Layout>
        <DynamicContactComponent/>
        <DynamicHeaderComponent/>
        <DynamicAboutComponent/>
    </Layout>
  ) ;
}

export default Page;
