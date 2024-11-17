"use client";
import Row from "@/components/custom/Row";
import { Button } from "@/components/ui/button";
import React from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import SearchBar from "./SearchBar";
import CartBar from "./CartBar";
import { useRouter } from "next/navigation";

export default function IconGroups({
  openSearchBar,
  setOpenSearchBar,
  openCartBar,
  setOpenCartBar,
}: {
  openSearchBar: boolean;
  setOpenSearchBar: (v: boolean) => void;
  openCartBar: boolean;
  setOpenCartBar: (v: boolean) => void;
}) {
  const router = useRouter();
  return (
    <div>
      <Row className="lg:gap-4">
        <SearchBar
          openSearchBar={openSearchBar}
          setOpenSearchBar={setOpenSearchBar}
        />
        <Button
          variant="nostyle"
          size={"icon"}
          onClick={() => setOpenSearchBar(!openSearchBar)}
        >
          <CiSearch size={40} className="hover:text-primary-700" />
        </Button>

        <Button
          variant="nostyle"
          size={"icon"}
          onClick={() => setOpenCartBar(!openCartBar)}
          className="relative hidden lg:block"
        >
          <CiShoppingCart size="40" className="hover:text-primary-700" />
          <span className="absolute -top-1 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white">0</span>
        </Button>

        <Button
          variant="nostyle"
          size={"icon"}
          onClick={() => router.push("/account/dashboard")}
        >
          <CiUser size={40} className="hover:text-primary-700" />
        </Button>
        <CartBar openCartBar={openCartBar} setOpenCartBar={setOpenCartBar} />
      </Row>
    </div>
  );
}
