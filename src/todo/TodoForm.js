import React from "react";
import Grid from "../template/Grid";
import Button from "../template/IconButton";

export default props => (
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
      </Grid>
    </div>
  </div>
);
