import React from "react";

export const Frame1 = () => {
  return (
    <>
      <rect
        y="4"
        width="104"
        height="42"
        rx="4"
        fill="black"
        fillOpacity="0.8"
      />
      <rect x="28" y="25" width="10" height="11" rx="2" fill="#8BDDFF" />
      <rect x="66" y="25" width="10" height="11" rx="2" fill="#8BDDFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 4H29L12 46H4L21 4Z"
        fill="white"
        fillOpacity="0.4"
      />
    </>
  );
};
