import React from "react";

// Converte Numbers into Grib Bootstrap
// Ex: toCssClasses(12 10 8 6)
// Return: col-sm-12 col-md-10 col-lg-8 col-xl-6
const toGridClasses = grid => {
  let cols = grid ? grid.split(" ") : [];
  let classes = "";

  if (cols[0]) classes += `col-sm-${cols[0]}`;
  if (cols[1]) classes += ` col-md-${cols[1]}`;
  if (cols[2]) classes += ` col-lg-${cols[2]}`;
  if (cols[3]) classes += ` col-xl-${cols[3]}`;

  return classes;
};

export default props => {
  const grid = toGridClasses(props.cols) || 12;

  return <div className={grid}>{props.children}</div>;
};
