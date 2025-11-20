import React from "react";
import Grade from "./Grade";

export const Student = ({
  firstName: first,
  lastName: last,
  age,
  course,
  city,
  picture: img,
  gpa,
  graduate,
}) => (
  <article className="bg-zinc-400 w-1/5 p-5 rounded-2xl shadow grow">
    <h1 className="text-2xl pb-3 inline">
      {first} {last} ({age})
    </h1>
    <Grade points={gpa} />
    <img src={img} className="w-full p-1" />
    <p>Course: {course}</p>
    <p>City: {city}</p>
    <p>Alumnus: {graduate ? "Yes" : "No"}</p>
  </article>
);
