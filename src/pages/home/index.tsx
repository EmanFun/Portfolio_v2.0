import { AboutComponent } from "@/components";
import { Layout } from "@/layouts";
import React from "react";

interface indexProps {};

function index({}: indexProps) {
  return (
    <Layout>
        <AboutComponent/>
        hello world
    </Layout>
  ) ;
}

export default index;
