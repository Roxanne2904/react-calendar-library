import React from "react";

export const ChevronLeft = ({ size = 16, myClassName }) => {
  return (
    <svg
      className={`${myClassName}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
};
export const ChevronRight = ({ size = 16, myClassName }) => {
  return (
    <svg
      className={`${myClassName}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
};
export const ChevronsLeft = ({ size = 16, myClassName }) => {
  return (
    <svg
      className={`${myClassName}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
    </svg>
  );
};

export const ChevronsRight = ({ size = 16, myClassName }) => {
  return (
    <svg
      className={`${myClassName}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
    </svg>
  );
};
