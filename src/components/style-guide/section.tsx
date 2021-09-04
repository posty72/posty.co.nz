import * as React from "react";
import { classNames } from "../../utlity/class-names";

interface StyleGuideSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    contain?: boolean;
}

export const StyleGuideSection: React.FunctionComponent<StyleGuideSectionProps> = ({
    title,
    children,
    contain = false,
    className,
    ...props
}: StyleGuideSectionProps) => (
    <section
        id={title.toLowerCase()}
        className={classNames(
            "style-guide-section",
            { "constrain-width": contain },
            className
        )}
        {...props}
    >
        <div
            className={`style-guide-section-heading ${
                !contain ? "constrain-width" : ""
            }`}
        >
            <h1 className="heading-2">{title}</h1>
            <hr className="style-guide-section-break" />
        </div>
        <div className="style-guide-section-content">{children}</div>
    </section>
);
