'use client';
import Loading from "@/components/Loading";
import React from "react";


const loading:React.FC = () => {
  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Loading/>
    </div>
  );
};

export default loading;
