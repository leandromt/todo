import React from "react";
import IconButton from "../template/IconButton";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(item => (
      <tr key={item._id}>
        <td>{item.description}</td>
        <td>
          <IconButton
            color="success"
            icon="check"
            onClick={() => props.itemMarkAsDone(item)}
          />
          <IconButton
            color="warning"
            icon="undo"
            onClick={() => props.itemMarkAsPending(item)}
          />
          <IconButton
            color="danger"
            icon="trash-o"
            onClick={() => props.deleteItem(item)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
