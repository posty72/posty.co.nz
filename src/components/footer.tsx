"use client";

import { usePathname } from "next/navigation";
import { EXTERNAL_LINKS, PAGES } from "../constants/links";
import { CallToAction } from "./call-to-action";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="footer">
      {!pathname.startsWith(PAGES.contact) && (
        <CallToAction
          title="Get in touch with me"
          links={[
            { label: "Direct Message", link: PAGES.contact },
            {
              label: "LinkedIn",
              link: EXTERNAL_LINKS.linkedIn,
            },
          ]}
        />
      )}
    </footer>
  );
};
