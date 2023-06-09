import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: any) => {
  return (
    <>
      {/* Navigation bar */}
      <Navbar />
      {children}
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
