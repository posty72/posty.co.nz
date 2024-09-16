import Link from "next/link";
import * as React from "react";

interface TagProps {
  tags: string[];
}

const TagList = ({ tags }: TagProps) => {
  if (tags.length <= 0) {
    return null;
  }

  return (
    <div className="tags">
      <h3 className="tags-title">Tags</h3>
      <ul className="tags-list">
        {tags.map((tagName) => (
          <li key={tagName} className="tags-item">
            <Link href={`/tag/${tagName}`} className="tags-link">
              {tagName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
