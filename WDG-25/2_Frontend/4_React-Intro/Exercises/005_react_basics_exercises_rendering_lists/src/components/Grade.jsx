import React from "react";

const Grade = ({ points }) => {
  return (
    <span className="inline float-right text-2xl">
      {points >= 97 && "A+"}
      {points >= 93 && points <= 96 && "A"}
      {points >= 90 && points <= 92 && "A-"}
      {points >= 87 && points <= 89 && "B+"}
      {points >= 83 && points <= 86 && "B"}
      {points >= 80 && points <= 82 && "B-"}
      {points >= 77 && points <= 79 && "C+"}
      {points >= 73 && points <= 76 && "C"}
      {points >= 70 && points <= 72 && "C-"}
      {points >= 67 && points <= 69 && "D+"}
      {points >= 63 && points <= 66 && "D"}
      {points >= 60 && points <= 62 && "D-"}
      {points >= 0 && points <= 59 && "F"}
    </span>
  );
};

export default Grade;
