import React from "react"
import "./index.css"

export const Points = () =>
  [
    [10, -1, 60, 13, 1],
    [10, -1, 284, 19, 1],
    [384, 9, 60, 12, -1],
    [384, 9, 284, 6, -1],
  ].map((param) => {
    const [top, offset, left, point, next] = param
    return [...Array(6).keys()].map((i) => {
      const pointNumber = point + i * next
      return (
        <text
          key={i}
          x={left + 15 + i * 30}
          y={top + offset}
          className="point"
        >
          {pointNumber}
        </text>
      )
    })
  })
