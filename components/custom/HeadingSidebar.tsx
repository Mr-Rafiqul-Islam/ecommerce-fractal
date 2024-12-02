import React from "react";

export default function HeadingSidebar({ name }: { name: string }) {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex justify-between items-center w-full">
        <h6 className="capitalize">{name}</h6>
      </div>
    </div>
  );
}
