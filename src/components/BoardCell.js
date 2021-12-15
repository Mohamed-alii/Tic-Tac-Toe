import React, { useState } from "react";
import "./BoardCell.css";

const BoardCell = ({ index, cellClickHandler, boardCells }) => {
  let cellColorClass = "";

  switch (boardCells[index]) {
    case "X":
        cellColorClass = 'font--yellow';
      break;
    case "O":
        cellColorClass = 'font--pink';
      break;
    default:
        cellColorClass = '';
      break;
  }

  return (
    <div
      className={`game-board__cell ${cellColorClass}`}
      onClick={() => cellClickHandler(index)}
    >
      {boardCells[index]}
    </div>
  );
};

export default BoardCell;
