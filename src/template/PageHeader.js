import React from "react";

export default props => {
  return (
    <header className="pb-2 mt-4 mb-2 border-bottom">
      <h1>
        <span className="text-primary">{props.name}</span>{" "}
        <small className="text-secondary">{props.small} </small>
        <span class="badge badge-secondary custom-badge">18</span>
      </h1>
    </header>
  );
};
