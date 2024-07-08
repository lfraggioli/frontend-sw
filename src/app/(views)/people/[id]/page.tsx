"use client";

import PersonDetail from "@/app/ui/PersonDetail";
import React from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
  // console.log("params", params);

  return (
    <div className="mt-16 h-screen">
      <PersonDetail id={params.id} />
    </div>
  );
};

export default DetailPage;
