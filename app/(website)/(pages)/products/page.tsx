import Container from "@/components/custom/Container";
import Row from "@/components/custom/Row";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Products from "@/components/modules/products";
import { Metadata } from "next";

export default function page() {
  return (
    <>
      <section className="my-10">
        <Container>
          {/* breadcrumbs */}
          <Row>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link className="text-xl hover:text-primary-500 duration-300" href="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link className="text-xl hover:text-primary-500 duration-300 font-bold" href="/products">Store</Link>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Row>
        </Container>
      </section>
      <Products/>
    </>
  );
}

export const metadata: Metadata = {
  title: "fractal Products page",
  description: "An E-commerce app with NEXT JS",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
