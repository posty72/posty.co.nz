"use client";

import * as React from "react";
import { PAGES, EXTERNAL_LINKS } from "../constants/links";
import Link from "next/link";
import { classNames } from "@/utility/class-names";
import { useEffect, useState } from "react";

interface NavItemProps {
  to: string;
  label: string;
  external?: true;
}

const NavItem = ({ to, label, external }: NavItemProps) => {
  return (
    <li className={"nav-item"}>
      {(external && (
        <a
          className={"nav-item-link"}
          role="menuitem"
          href={to}
          target="_blank"
          rel="noreferrer"
        >
          {label}
        </a>
      )) || (
        <Link className={"nav-item-link"} role="menuitem" href={to}>
          {label}
        </Link>
      )}
    </li>
  );
};

function Navigation() {
  const [isOpen, toggleNav] = useState(false);

  // Rather than making everything a client component
  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);

    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  return (
    <div className={classNames("navigation")}>
      <button className={"hamburger"} onClick={() => toggleNav(!isOpen)}>
        <div className={"hamburger-wrapper"}>
          <div className={classNames("hamburger-item", "line-1")} />
          <div className={classNames("hamburger-item", "line-2")} />
        </div>
        Show menu
      </button>

      <nav className={"nav"} role="menu">
        <ul className={"nav-items"}>
          <NavItem to={PAGES.work} label="Work" />
          <NavItem to={PAGES.styleGuide} label="Style Guide" />
          <NavItem to={EXTERNAL_LINKS.linkedIn} label="LinkedIn" external />
          <NavItem to={EXTERNAL_LINKS.github} label="GitHub" external />
        </ul>
        <Link href={PAGES.contact} className={classNames("button", "tertiary")}>
          Contact Me
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
