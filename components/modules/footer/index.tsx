'use client';
import Container from "@/components/custom/Container";
import { useUser } from "@clerk/clerk-react";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const { isSignedIn } = useUser();
  return (
    <footer className="bg-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-slate-400">
          <ul className="flex flex-col gap-4">
            <li className="my-10">
              <h4 className="text-white">Fractal</h4>
            </li>
            <li className="flex gap-4">
              <PhoneCall /> (+1) 123-456-7890
            </li>
            <li className="flex gap-4">
              <Mail /> info@fractal.store
            </li>
            <li className="flex gap-4">
              <MapPin /> 3891 Riverside Drive, San Francisco, CA 94109
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="my-10">
              <h4 className="text-white">Informations</h4>
            </li>
            <li className="flex gap-4">
              <Link className="hover:text-primary-500" href={"/account/dashboard"}>My Account</Link>
            </li>
            <li className="flex gap-4">
              <Link className="hover:text-primary-500" href={isSignedIn ? "/account/dashboard" : "/sign-in"}>
                {isSignedIn ? "Dashboard" : "Login"}
              </Link>
            </li>
            <li className="flex gap-4">
              <Link className="hover:text-primary-500" href="/cart">My Cart</Link>
            </li>
            <li className="flex gap-4">
              <Link className="hover:text-primary-500" href="/checkout">Checkout</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
          <li className="my-10">
              <h6 className="text-white">Services</h6>
            </li>
            <li>
              <Link href={"#"} className="hover:text-primary-500">About Us</Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-primary-500">Careers</Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-primary-500">Delivery Information</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
