import React from "react";

const icons = [
  require("@/assets/images/crown-1.png"),
  require("@/assets/images/crown-2.png"),
  require("@/assets/images/crown-3.png"),
  require("@/assets/images/crown-4.png"),
  require("@/assets/images/crown-5.png"),
  require("@/assets/images/crown-6.png")
];

const RankTableRow = props => {
  return (
    <div className="mb-8">
      <div className="flex items-center bg-gray-800 rounded-t p-4 text-white">
        <div className="bg-white w-12 h-12 p-2 rounded-full">
          <img src={icons[props.index]} alt={props.rank.name} className="w-full h-auto" />
        </div>
        <div className="text-lg font-bold mx-4">{props.rank.title}</div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default RankTableRow;
