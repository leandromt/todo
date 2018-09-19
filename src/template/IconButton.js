import React from "react";
import IfProps from "./IfProps";

export default props => (
  <IfProps test={!props.hide}>
    <button onClick={props.onClick} className={"btn btn-" + props.color}>
      <i className={"fa fa-" + props.icon} />
    </button>
  </IfProps>
);
