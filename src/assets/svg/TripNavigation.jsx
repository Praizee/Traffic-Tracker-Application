import React from "react";

const Movement = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12.5"
        r="9.5"
        fill="#0066FF"
        stroke="#E6E8EE"
        stroke-width="5"
      />
    </svg>
  );
};

const Dots = () => {
  return (
    <div className="flex flex-col gap-2 mx-auto">
      <div className="bg-[#848484] rounded-full w-[5px] h-[5px]" />
      <div className="bg-[#848484] rounded-full w-[5px] h-[5px]" />
      <div className="bg-[#848484] rounded-full w-[5px] h-[5px]" />
    </div>
  );
};

const Location = () => {
  return (
    <svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <path
        d="M8 10.5C8.55 10.5 9.02083 10.3042 9.4125 9.9125C9.80416 9.52083 10 9.05 10 8.5C10 7.95 9.80416 7.47917 9.4125 7.0875C9.02083 6.69583 8.55 6.5 8 6.5C7.45 6.5 6.97917 6.69583 6.5875 7.0875C6.19583 7.47917 6 7.95 6 8.5C6 9.05 6.19583 9.52083 6.5875 9.9125C6.97917 10.3042 7.45 10.5 8 10.5ZM8 20.5C5.31667 18.2167 3.3125 16.0958 1.9875 14.1375C0.6625 12.1792 0 10.3667 0 8.7C0 6.2 0.804167 4.20833 2.4125 2.725C4.02083 1.24167 5.88333 0.5 8 0.5C10.1167 0.5 11.9792 1.24167 13.5875 2.725C15.1958 4.20833 16 6.2 16 8.7C16 10.3667 15.3375 12.1792 14.0125 14.1375C12.6875 16.0958 10.6833 18.2167 8 20.5Z"
        fill="#EB5757"
      />
    </svg>
  );
};

const TripNavigation = () => {
  return (
    <div className="flex flex-col gap-4 w-max">
      <Movement />
      <Dots />
      <Location />
    </div>
  );
};

export default TripNavigation;
