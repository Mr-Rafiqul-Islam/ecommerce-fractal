import React from "react";
import { ClipLoader } from "react-spinners";
export default function Loading({
  isLoading,
  size = 100,
  color = "#94203b",
}: {
  isLoading: boolean;
  size?: number;
  color?: string;
}) {
  return (
    <div className="!z-50 h-screen absolute inset-0 flex items-center justify-center">
      {isLoading && <ClipLoader color={color} size={size} />}
    </div>
  );
}
