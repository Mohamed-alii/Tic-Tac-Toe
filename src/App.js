import React, { useState } from "react";
import "./App.css";
import BoardCell from "./components/BoardCell";

const App = () => {

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [boardCells, setBoardCells] = useState(new Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const [boardIsActive, setBoardIsActive] = useState(true);

  const letterColorClass = `${
    winner === "X" ? "font--yellow" : "font--pink"
  }`;
  const winnerPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  const checkWinner = (board) => {
    winnerPatterns.forEach((pattern) => {
      if (board[pattern[0]]) {
        // not empty string
        if (
          board[pattern[0]] === board[pattern[1]] &&
          board[pattern[1]] === board[pattern[2]]
        ) {
          setWinner(board[pattern[0]]);
          setBoardIsActive(false);
          console.log("the Winner is " + board[pattern[0]]);
        }
      }
    });
  };

  const cellClickHandler = (index) => {
    if (!boardCells[index] && boardIsActive) {
      let board = [...boardCells];

      if (currentPlayer === "X") {
        board[index] = "X";
        setCurrentPlayer("O");
      } else {
        board[index] = "O";
        setCurrentPlayer("X");
      }

      setBoardCells(board);
      checkWinner(board);
    } //else do nothing
  };

  const playAgainHandler = () => {
    setBoardCells(new Array(9).fill(""));
    setWinner("");
    setBoardIsActive(true)
    setCurrentPlayer('X')
  };

  const isDraw = !winner && !boardCells.includes('');

  return (
    <div className="game-board">
      {(winner || !boardCells.includes('') )  && ( // if we have a winner or draw
        <div className="overlay">
          <div className="overlay__content">
            { isDraw &&
            (<h2>
              Draw!
            </h2>)}
            { winner &&  
            (
                <h2>
                    The winner is  
                    <span className={letterColorClass}> {winner}</span>
                </h2>
            )}
            <button onClick={playAgainHandler}>Play again</button>
          </div>
        </div>
      )}
      <header className="game-board__header">
        <h2>
          Next player :{" "}
          <span className={letterColorClass}>{currentPlayer}</span>
        </h2>
      </header>
      <div className="game-board__container">
        <BoardCell
          index="0"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
        <BoardCell
          index="1"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
        <BoardCell
          index="2"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
        <BoardCell
          index="3"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
        <BoardCell
          index="4"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
        <BoardCell
          index="5"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
        <BoardCell
          index="6"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
        <BoardCell
          index="7"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
        <BoardCell
          index="8"
          cellClickHandler={cellClickHandler}
          boardCells={boardCells}
        />
      </div>
    </div>
  );
};

export default App;
