import React from "react";
export default function Section({ id, className = "", children, as: Tag = "section", style }) {
  return (
    <Tag id={id} className={`section ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}