import React from "react";

const FieldErrors = props => {
  return (
    props.errors.length > 0 && (
      <div className="bg-gray-100 text-gray-600 border rounded mt-4 p-4">
        <h5 className="font-bold ">ATENÇÃO!</h5>
        {props.errors.map((err, index) => (
          <p className="text-sm" key={index}>
            {err}
          </p>
        ))}
      </div>
    )
  );
};

export default FieldErrors;
