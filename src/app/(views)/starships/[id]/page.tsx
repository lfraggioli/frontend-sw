"use client";

import { StarshipDetail } from "@/app/ui/starships/StarshipsDetail";
import React from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
  console.log("params", params);
  return (
    <div className="mt-16 h-max">
      <StarshipDetail id={params.id} />
    </div>
  );
};

export default DetailPage;
