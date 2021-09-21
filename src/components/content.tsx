import * as React from "react";

export const Content = ({
    children,
    ...rest
}: React.HTMLProps<HTMLDivElement>) => {
    return (
        <div className="constrain-width small">
            <div className="content" {...rest}>
                {children}
            </div>
        </div>
    );
};
