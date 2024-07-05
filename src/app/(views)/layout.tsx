import { Navbar } from "../_components/Navbar";

import React from "react";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-full">{children}</div>
    </div>
  );
};

export default GlobalLayout;
