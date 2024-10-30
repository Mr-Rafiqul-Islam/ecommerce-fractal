import Row from "@/components/custom/Row";
import React from "react";
import MobileButton from "./MobileButton";
import Logo from "@/components/custom/Logo";
import MainMenu from "./MainMenu";
import IconGroups from "./IconGroups";
import Container from "@/components/custom/Container";

export default function Main() {
  return (
    <section className="h-full">
      <Container>
        <Row className="justify-between">
          <MobileButton />
          <Logo />
          <MainMenu />
          <IconGroups />
        </Row>
      </Container>
    </section>
  );
}
