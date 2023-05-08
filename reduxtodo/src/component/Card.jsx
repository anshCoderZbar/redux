import React from "react";

export const Card = (props) => {
  return (
    <div className="row">
      {props?.data?.length >= 1 &&
        props?.data?.map((data, index) => {
          return (
            <div key={index} id={data.todos.id} className="col-md-4 my-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{data?.todos?.title}</h5>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteTodoHandler(data.todos.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
