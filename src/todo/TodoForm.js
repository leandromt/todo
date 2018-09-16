import React from "react";
import Grid from "../template/Grid";
import Button from "../template/IconButton";

export default props => (
  <div role="form">
    <div className="row">
      <Grid cols="12 9 10 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
        />
      </Grid>

      <Grid cols="12 3 2 2">
        <Button color="primary" icon="plus" />
      </Grid>
    </div>
  </div>
);
