"use client";

import * as React from "react";
import { useState } from "react";
import Navigation from "./navigation";
import Link from "next/link";
import { classNames } from "@/utility/class-names";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={"header gradient-fade"} itemScope={true}>
      <div className={classNames("header-inner", "constrain-width")}>
        <div className={"header-text"}>
          <h2 className={"header-title"} itemProp="title">
            <Link className={"header-link"} href="/">
              {title}
            </Link>
          </h2>
        </div>

        <Navigation toggleNav={() => setNavOpen(!navOpen)} />
      </div>
    </header>
  );
};
