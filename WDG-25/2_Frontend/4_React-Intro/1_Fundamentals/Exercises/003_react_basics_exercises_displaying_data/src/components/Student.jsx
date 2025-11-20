import React from "react";

export const Student = ({
  id,
  firstName: first,
  lastName: last,
  age,
  course,
  city,
  picture: img,
}) => (
  <article className="bg-zinc-400 w-1/6 p-5 rounded-2xl shadow" key={id}>
    <h1 className="text-2xl pb-3">
      {first} {last} ({age})
    </h1>
    <img src={img} className="w-full p-1" />
    <p>Course: {course}</p>
    <p>City: {city}</p>
  </article>
);
