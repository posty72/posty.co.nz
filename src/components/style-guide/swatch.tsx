import * as React from "react";

interface SwatchProps {
    title: string;
    value: string;
    outline?: boolean;
}
export const Swatch = ({ title, value, outline = false }: SwatchProps) => (
    <div className={`swatch small ${outline ? "outline" : ""} colour-${value}`}>
        <div className="swatch-inner">
            <p className="swatch-title">{title}</p>
            <div role="group" className="swatch-variations">
                <span className="swatch-variation tint-1" />
                <span className="swatch-variation shade-1" />
            </div>
        </div>
    </div>
);
