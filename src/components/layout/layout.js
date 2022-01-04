import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
