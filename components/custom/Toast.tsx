import { cn } from "@/lib/utils";
import { CheckCheck, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

export default function Toast({
  status = "success",
  message,
  link,
  toastId,
}: {
  status?: "error" | "success";
  message?: string;
  link?: string;
  toastId?: string;
}) {
  return (
    <div
      className={cn(
        "z-50 shadow-xl flex items-center p-4 gap-10 justify-between mb-4 border-borders bg-white",
        status === "error" && "text-red-800 border-t-4 border-red-300"
      )}
      role="alert"
    >
      {status === "success" ? (
        <CheckCheck className="w-8 h-8 text-green-700" />
      ) : (
        <CheckCheck className="w-8 h-8 text-red-700" />
      )}
      <div className="ms-3 font-medium">
        {message}
        {link && <Link href={link} className="font-semibold underline hover:no-underline">View</Link>}
      </div>
      <Button variant="outline" onClick={() => toast.remove(toastId)} size="icon" className="ms-auto rounded-lg">
        <X className={cn("w-8 h-8 text-black", status=== "error" && "text-red-800")}/>
      </Button>
    </div>
  );
}
