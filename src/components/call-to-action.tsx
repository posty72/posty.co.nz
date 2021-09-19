import { Link } from "gatsby";
import * as React from "react";

interface CallToActionProps {
    label: string;
    link: string;
}

export const CallToAction = ({ label, link }: CallToActionProps) => {
    return (
        <div className="constrain-width medium">
            <Link className="call-to-action" to={link}>
                <div className="call-to-action-label">{label}</div>
            </Link>
        </div>
    );
};
