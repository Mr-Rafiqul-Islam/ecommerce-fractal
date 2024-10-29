import Row from "@/components/custom/Row";
import React from "react";
import MobileButton from "./MobileButton";
import Logo from "@/components/custom/Logo";
import MainMenu from "./MainMenu";
import IconGroups from "./IconGroups";
import Container from "@/components/custom/Container";

export default function Main() {
  return (
    <section>
      <Container>
        <Row>
          <MobileButton />
          <Logo />
          <MainMenu />
          <IconGroups />
        </Row>
      </Container>
    </section>
  );
}
