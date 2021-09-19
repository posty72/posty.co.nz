import * as React from "react";

interface HighlightProps {
    title: string;
    children: React.ReactNode;
}

export const Highlight = ({ children, title }: HighlightProps) => {
    return (
        <div className="constrain-width medium">
            <div className="highlight">
                <h3 className="highlight-title">{title}</h3>
                {children}
            </div>
        </div>
    );
};
