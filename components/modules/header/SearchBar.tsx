"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar({
  openSearchBar,
  setOpenSearchBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
}) {
    const handleSearch = () => { 
        // todo call api
     }
  return (
      <Dialog open={openSearchBar}>
        <DialogContent className="lg:max-w-screen-xl z-[9999] [&>.closeBtn]:hidden ">
          <div className="flex items-center w-full gap-4">
            <Search className="text-slate-300"/>
            <Input placeholder="type any product here" onInput={handleSearch} className=" text-slate-500"/>
            <Button onClick={() => setOpenSearchBar(false)} variant="outline" size={"icon"} className="hover:bg-primary-500 group">
            <X className="group-hover:text-white"/>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
  );
}
