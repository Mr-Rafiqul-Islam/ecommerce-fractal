import Payments from "@/components/custom/Payments";
import Categories from "@/components/modules/home/Categories";
import CtaOne from "@/components/modules/home/CtaOne";
import CtaTwo from "@/components/modules/home/CtaTwo";
import FeaturesProducts from "@/components/modules/home/FeaturesProducts";
import HomeSlide from "@/components/modules/home/HomeSlide";
import { Metadata } from "next";
import * as React from "react";
export default function Home() {
  return <>
  <HomeSlide/>
  <Payments/>
  <Categories/>
  <FeaturesProducts/>
  <CtaTwo/>
  <CtaOne/>  
  </>;
}

export const metadata: Metadata = {
  title: "fractal Home page",
  description: "An E-commerce app with NEXT JS",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};
