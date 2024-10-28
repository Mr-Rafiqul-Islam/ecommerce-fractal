import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <div className="absolute top-10 left-10 flex items-center gap-4 group">
        <Button
          variant="nostyle"
          className="text-h4 group-hover:text-primary-900 gap-8"
        >
            <MoveLeft size={40} className="group-hover:text-primary-900 duration-100 ease-linear group-hover:translate-x-2"/>
          Go Back
        </Button>
      </div>
      {children}
    </div>
  );
}
