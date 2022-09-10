import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

// this is just like in context api where you nest everything in the middle
// this layout component will hold everything as children
// making the nav bar and footer appear on every page because this whole
// layout is wrapping everything
