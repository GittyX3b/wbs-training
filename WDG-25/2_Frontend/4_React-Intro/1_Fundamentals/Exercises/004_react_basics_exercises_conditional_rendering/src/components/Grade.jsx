import React from "react";

const Grade = ({ points }) => {
  return (
    <span className="inline float-right text-2xl">
      {points >= 97 && "A+"}
      {points >= 93 && "A"}
      {points >= 90 && "A-"}
      {points >= 87 && "B+"}
      {points >= 83 && "B"}
      {points >= 80 && "B-"}
      {points >= 77 && "C+"}
      {points >= 73 && "C"}
      {points >= 70 && "C-"}
      {points >= 67 && "D+"}
      {points >= 63 && "D"}
      {points >= 60 && "D-"}
      {points < 60 && "F"}
    </span>
  );
};

export default Grade;
