'use client';

import styles from "./layout.module.css";
import React, { useEffect, useState } from "react";



function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // o un placeholder/loader
  }
  return (
    <div className={styles.layout}>
        <div>
          {children}
        </div>
    </div>
  );
}

export default Layout;
