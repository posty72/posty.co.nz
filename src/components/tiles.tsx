import * as React from "react";

interface TilesProps {
    items: Tile[];
}

interface Tile {
    title: string;
    iconColour: string;
    description: string | React.ReactNode;
    tags?: string[];
}

export const Tiles = ({ items }: TilesProps) => {
    const Tile = ({ description, iconColour, tags, title }: Tile) => {
        return (
            <div className="tiles-item">
                <div className="tiles-item-head">
                    <div
                        className="tiles-item-icon"
                        style={{ backgroundColor: iconColour }}
                    ></div>
                    <h3 className="heading-3 tiles-item-heading">{title}</h3>
                </div>
                <div className="tiles-item-content">{description}</div>
                <div className="tiles-item-meta">
                    {tags?.map((tag, index) => (
                        <span className="pill" key={index}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="tiles || constrain-width">
            <div className="tiles-inner">
                {items.map((item, index) => (
                    <Tile key={index} {...item} />
                ))}
            </div>
        </div>
    );
};
