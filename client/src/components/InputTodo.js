import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  return (
    <Fragment>
      <h1 className="text-center my-5"> Input Todo</h1>
      <form className="d-flex">
        <input type="text" placeholder="add to do" className="form-control" />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
