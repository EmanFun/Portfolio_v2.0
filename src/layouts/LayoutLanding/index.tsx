import React from "react";
import styles from './styles.module.css';


function LayoutLanding({children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
);
}

export default LayoutLanding;
