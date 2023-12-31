import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: any) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
