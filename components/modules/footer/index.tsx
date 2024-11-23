"use client";
import Container from "@/components/custom/Container";
import Toast from "@/components/custom/Toast";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import { m } from "framer-motion";
import { Loader2Icon, Mail, MapPin, MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Loading from "@/components/custom/Loading";
export default function Footer() {
  const { isSignedIn } = useUser();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSave = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (loading) {
      setLoading(false);
      return false;
    }
    const Email = z.object({
      email: z.string().email().min(5).max(100),
    });
    const validatedFields = Email.safeParse({ email });

    if (!validatedFields.success) {
      toast.custom(
        <Toast status="error" message={"validation error. Try again"} />
      );
      setLoading(false);
      return;
    }
    const sendEmail = async () => {
      const values = {
        subject: "Email Subscription to Fractal Store",
        email: email,
        message: "Just Subscribed to fractal Newsletter",
      };
      await axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/sendemail", values)
        .then((res) => {
          const data = res.data;
          toast.custom(<Toast status="success" message={data.message} />);
        })
        .catch((err) => {
          console.log(err);
          toast.custom(<Toast status="error" message={err.message} />);
          setLoading(false);
        });
    };
    await sendEmail();
  };

  return (
    <>
      {loading && <Loading isLoading={loading} />}
      <m.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-dark pb-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 text-slate-400">
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
                <Link
                  className="hover:text-primary-500"
                  href={"/account/dashboard"}
                >
                  My Account
                </Link>
              </li>
              <li className="flex gap-4">
                <Link
                  className="hover:text-primary-500"
                  href={isSignedIn ? "/account/dashboard" : "/sign-in"}
                >
                  {isSignedIn ? "Dashboard" : "Login"}
                </Link>
              </li>
              <li className="flex gap-4">
                <Link className="hover:text-primary-500" href="/cart">
                  My Cart
                </Link>
              </li>
              <li className="flex gap-4">
                <Link className="hover:text-primary-500" href="/checkout">
                  Checkout
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="my-10">
                <h6 className="text-white">Services</h6>
              </li>
              <li>
                <Link href={"#"} className="hover:text-primary-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"#"} className="hover:text-primary-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={"#"} className="hover:text-primary-500">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href={"#"} className="hover:text-primary-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <ul className="">
              <li className="my-10">
                <h6 className="text-white">Subscribe</h6>
              </li>
              <li className="flex gap-4">
                <Link href="#" className="">
                  Enter Your email to get apps, products and latest updates.
                </Link>
              </li>
              <li className="flex gap-4 mt-4">
                <form className="flex w-full bg-transparent border border-white rounded-lg gap-4 items-center p-3">
                  <Mail size={40} />
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    placeholder="Enter your email here"
                    max={40}
                    className="rounded-lg py-4 bg-transparent text-base text-white"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleSave}
                    disabled={loading}
                    className="rounded-lg"
                    type="submit"
                  >
                    <MoveRight className={cn("block", loading && "hidden")} />
                    <Loader2Icon
                      size={40}
                      className={cn("hidden", loading && "animate-spin block")}
                    />
                  </Button>
                </form>
              </li>
            </ul>
          </div>
        </Container>
      </m.footer>
    </>
  );
}
