import { WelcomeMessageComponent } from "@/components";
import { Layout } from "@/layouts";
import React from "react";

interface indexProps {};

function index({}: indexProps) {
  return (
    <Layout>
        Hello world!
    </Layout>
  ) ;
}

export default index;
