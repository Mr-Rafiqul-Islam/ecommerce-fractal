"use client";
import Row from "@/components/custom/Row";
import React, { useState } from "react";
import MobileButton from "./MobileButton";
import Logo from "@/components/custom/Logo";
import MainMenu from "./MainMenu";
import IconGroups from "./IconGroups";
import Container from "@/components/custom/Container";

export default function Main() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCartBar, setOpenCartBar] = useState(false);
  return (
    <section className="h-full">
      <Container>
        <Row className="justify-between">
          <MobileButton />
          <Logo />
          <MainMenu />
          <IconGroups 
          openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar}
          openCartBar={openCartBar} setOpenCartBar={setOpenCartBar}
          />
        </Row>
      </Container>
    </section>
  );
}
