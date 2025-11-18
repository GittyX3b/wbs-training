import React from "react";
import Grade from "./Grade";

export const Student = ({
  id,
  firstName: first,
  lastName: last,
  age,
  course,
  city,
  picture: img,
  points,
  graduate,
}) => (
  <article className="bg-zinc-400 w-1/5 p-5 rounded-2xl shadow" key={id}>
    <h1 className="text-2xl pb-3 inline">
      {first} {last} ({age})
    </h1>
    <Grade points={points} />
    <img src={img} className="w-full p-1" />
    <p>Course: {course}</p>
    <p>City: {city}</p>
    <p>Alumni: {graduate ? "Yes" : "No"}</p>
  </article>
);
