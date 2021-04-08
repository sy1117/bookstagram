import clsx from "clsx";
import React from "react";

export interface IComment {
  data: {
    user: {
      userId: string;
    };
    content: string;
  };
}

export const Comment: React.FC<IComment> = ({
  data: {
    user: { userId },
    content,
  },
}) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <b>{userId}</b>
      <div style={{ paddingLeft: "1rem" }}>{content}</div>
    </div>
  );
};
