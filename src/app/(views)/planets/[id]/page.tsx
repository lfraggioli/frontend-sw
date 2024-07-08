"use client";

import PlanetDetail from "@/app/ui/planets/PlanetDetail";
import React from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
  console.log("params", params);

  return (
    <div className="mt-16 h-screen">
      <PlanetDetail id={params.id} />
    </div>
  );
};

export default DetailPage;
