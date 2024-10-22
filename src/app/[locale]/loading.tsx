"use client";
import Loading from "@/components/Loading";
import React from "react";
import Image from "next/image";
import LoadingBg from "/public/images/ImageBgOne.jpg"

const loading: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Image
        src={LoadingBg}
        alt="Landing background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <Loading />
    </div>
  );
};

export default loading;
