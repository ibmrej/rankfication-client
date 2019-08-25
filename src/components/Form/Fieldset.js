import React from "react";

const Fieldset = props => (
  <fieldset className="block mb-8 p-4 border rounded">
    {props.legend && (
      <legend className="px-2 py-2 rounded bg-white border text-sm text-gray-500 uppercase">{props.legend}</legend>
    )}
    <div>{props.children}</div>
  </fieldset>
);

export default Fieldset;
