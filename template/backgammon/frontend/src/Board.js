import React from "react"

export const Board = () => {
  const boardTable = [
    {
      x: 0,
      y: 0,
      rx: 3,
      ry: 3,
      width: 524,
      height: 394,
      className: "board-outer",
    },
    {
      x: 10,
      y: 10,
      rx: 3,
      ry: 3,
      width: 40,
      height: 374,
      className: "board-inner",
    },
    {
      x: 60,
      y: 10,
      rx: 0,
      ry: 0,
      width: 180,
      height: 374,
      className: "board-inner",
    },
    {
      x: 284,
      y: 10,
      rx: 0,
      ry: 0,
      width: 180,
      height: 374,
      className: "board-inner",
    },
    {
      x: 474,
      y: 10,
      rx: 3,
      ry: 3,
      width: 40,
      height: 182,
      className: "board-inner",
    },
    {
      x: 474,
      y: 202,
      rx: 3,
      ry: 3,
      width: 40,
      height: 182,
      className: "board-inner",
    },
  ]
  return boardTable.map(({ x, y, rx, ry, width, height, className }, i) => (
    <rect
      key={i}
      x={x}
      y={y}
      rx={rx}
      ry={ry}
      width={width}
      height={height}
      className={className}
      strokeWidth={1}
    />
  ))
}
