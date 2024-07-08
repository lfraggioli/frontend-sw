"use client";

import PersonDetail from "@/app/ui/people/PersonDetail";
import React from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
  // console.log("params", params);

  return (
    <div className="my-16 h-max">
      <PersonDetail id={params.id} />
    </div>
  );
};

export default DetailPage;
