import React from "react";

const Heading = props => (
  <div className="mb-8">
    <div className="text-2xl font-bold">{props.title}</div>
    {props.description && <div className="text-gray-500 mt-2">{props.description}</div>}
  </div>
);

export default Heading;
