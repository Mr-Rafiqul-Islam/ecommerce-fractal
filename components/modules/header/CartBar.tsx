import React from "react";
import { motion, m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trash } from "lucide-react";
import { CartItem } from "@/types";
export default function CartBar({
  openCartBar,
  setOpenCartBar,
}: {
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) {

    const handleRemoveItem = (item:CartItem) => {
        
    }
  return (
    <AnimatePresence>
      {openCartBar && (
        <div className="absolute top-[54px] right-0 h-fit w-[360px] bg-white p-4 shadow-2xl">
          <div className="flex flex-col justify-between gap-8">
            <span className="text-center">
              You Have <strong>0</strong>items in your cart
            </span>
            <div className="flex flex-col snap-y gap-6 border-b border-gray-200 pb-4 max-h-[360px]">
              <div className="flex justify-between gap-4 snap-center cursor-grab">
                <Image
                  src=""
                  width="200"
                  height="200"
                  className="h-20 object-cover w-20"
                  alt="product"
                />
                <div className="flex flex-col gap-1">
                  <span className="capitalize">name here</span>
                  <div className="inline-flex gap-4 font-bold">
                    <span className="font-bold">2</span>
                    <span>X</span>
                    <span className="font-bold">$200</span>
                  </div>
                  <div className="inline-flex justify-between">
                    <div className="items-center gap-1 inline-flex justify-between">
                      <span>Style:</span>
                      <span className="font-bold">style</span>
                    </div>
                    <div className="inline-flex gap-1">
                      <span>Option:</span>
                      <span className="font-bold">option</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start" role="button" onClick={() => handleRemoveItem(item)}>
                    <Trash className="hover:text-primary-500" size={20}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
