import React from "react";

const StudentTableRow = props => {
  return (
    <div
      className={[
        "flex justify-between p-4",
        props.index % 2 === 0 ? "bg-gray-200" : "bg-gray-300",
        props.index === props.arr.length - 1 ? "rounded-b" : ""
      ].join(" ")}
    >
      <div>
        <span>{props.aluno.index}</span> {props.aluno.name}
      </div>
      <div className="text-blue-400 font-bold">{props.aluno.score}</div>
    </div>
  );
};

export default StudentTableRow;
