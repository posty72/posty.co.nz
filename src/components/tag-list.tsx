import { Link } from "gatsby";
import * as React from "react";

const TagList = ({ tags }) => {
    if (tags.length <= 0) {
        return null;
    }

    return (
        <div className="tags">
            <h3 className="tags-title">Tags</h3>
            <ul className="tags-list">
                {tags.map((tagName: string) => (
                    <li key={tagName} className="tags-item">
                        <Link to={`/tag/${tagName}`} className="tags-link">
                            {tagName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagList;
