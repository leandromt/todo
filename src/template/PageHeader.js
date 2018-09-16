import React from "react";

export default props => {
  return (
    <header className="pb-2 mt-4 mb-2 border-bottom">
      <h1>
        {props.name} <small>{props.small}</small>
      </h1>
    </header>
  );
};
