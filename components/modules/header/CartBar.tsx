import React from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Trash } from "lucide-react";
import CurrencyFormat from "@/components/custom/CurrencyFormat";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function CartBar({
  openCartBar,
  setOpenCartBar,
}: {
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) {
  const handleRemoveItem = () => {};
  return (
    <AnimatePresence>
      {openCartBar && (
        <m.div
        onMouseLeave={() => setOpenCartBar(false)}
          initial={{ opacity: 0, y: -15 }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.7, type: "spring" },
          }}
          exit={{
            opacity: 0,
            y: -20,
            filter: "blur(5px)",
            transition: { duration: 0.22, ease: "easeIn" },
            scale:0
          }}
          className="absolute top-[54px] right-0 h-fit w-[360px] bg-white p-4 shadow-2xl"
        >
          <div className="flex flex-col justify-between gap-8">
            <span className="text-center">
              You have <strong>0</strong> items in your cart
            </span>
            {/* TODO : list cart items */}
            <div className="flex flex-col snap-y gap-6 border-b border-gray-200 pb-4 max-h-[360px] overflow-y-auto">
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
                <div
                  className="flex items-start"
                  role="button"
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className="hover:text-primary-500" size={20} />
                </div>
              </div>
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
                <div
                  className="flex items-start"
                  role="button"
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className="hover:text-primary-500" size={20} />
                </div>
              </div>
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
                <div
                  className="flex items-start"
                  role="button"
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className="hover:text-primary-500" size={20} />
                </div>
              </div>
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
                <div
                  className="flex items-start"
                  role="button"
                  onClick={() => handleRemoveItem()}
                >
                  <Trash className="hover:text-primary-500" size={20} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between font-bold">
                <div className="text-xl">Subtotal</div>
                <strong>
                  <CurrencyFormat value={200} className="text-right" />
                </strong>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/cart"
                  className="rounded-sm py-4 flex justify-center hover:bg-primary-500 hover:text-white duration-300 capitalize border border-borders text-base"
                >
                  View Cart
                </Link>
                <Button
                  variant={"default"}
                  size="lg"
                  className="rounded-sm py-8 text-base capitalize"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
