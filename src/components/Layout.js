import React from "react";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div className="wrapper">
      <Header/>
      <main className="content">
        {children}
      </main>
    </div>
  )
};

export default Layout;