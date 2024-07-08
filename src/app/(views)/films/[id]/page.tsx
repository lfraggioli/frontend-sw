"use client";

import FilmDetail from "@/app/ui/films/FilmDetail";
import React from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="mt-16 h-screen">
      <FilmDetail id={params.id} />
    </div>
  );
};

export default DetailPage;
