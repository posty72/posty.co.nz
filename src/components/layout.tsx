import * as React from "react";
import { ReactNode } from "react";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import "../style/index.scss";
import { Footer } from "./footer";
import { StaticImageData } from "next/image";

interface LayoutProps {
  title: string;
  subtitle?: string;
  image?: StaticImageData;
  children: ReactNode;
}

export const Layout = ({ title, subtitle, children, image }: LayoutProps) => {
  return (
    <div className={`base`}>
      <Header title={"Josh Post"} />
      <Hero title={title} subtitle={subtitle} image={image} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};
