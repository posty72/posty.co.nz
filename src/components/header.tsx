import { classNames } from "@/utility/class-names";
import Link from "next/link";
import Navigation from "./navigation";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
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

        <Navigation />
      </div>
    </header>
  );
};
