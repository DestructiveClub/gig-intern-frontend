import React from "react";

const Card = ({ interest, onClick }) => {
  return (
    <div
      className="mb-4 h-[38px] w-[187px] rounded-lg border border-blue-500 border-opacity-60 bg-white cursor-pointer"
      onClick={() => onClick(interest)}
    >
      <text className="font-sf-pro-text ml-4 text-[15px] font-medium not-italic text-blue-500">
        {interest}
      </text>
    </div>
  );
};

export default Card;
