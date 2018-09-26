import React from "react";
import Grid from "../template/Grid";
import Button from "../template/IconButton";

export default props => {
  const keyHandler = e => {};

  return (
    <div className="pb-2" role="form">
      <div className="row">
        <Grid cols="12 9 10 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={props.handleChange}
            value={props.description}
          />
        </Grid>

        <Grid cols="12 3 2 2">
          <Button color="primary" icon="plus" onClick={props.handleAdd} />
          <Button color="info" icon="search" onClick={props.handleSearch} />
          <Button color="default" icon="close" onClick={props.handleClear} />
        </Grid>
      </div>
    </div>
  );
};
