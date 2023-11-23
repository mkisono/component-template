import React from "react"

const divider = "rgba(0,0,0,0.12)"

export const Cube = ({ cube }) => {
  const cubeValue = cube === 0 ? 64 : 2 ** Math.abs(cube)
  let cubePos = 0
  if (cube < 0) {
    cubePos = 0
  } else if (cube > 0) {
    cubePos = 2
  }
  const cubePosTable = [
    {
      rect: { r_x: 11, r_y: 11 },
      text: { t_x: 30, t_y: 41, transform: "rotate(180 30,31)" },
    },
    {
      rect: { r_x: 11, r_y: 178 },
      text: { t_x: 30, t_y: 208, transform: "rotate(-90 30,197)" },
    },
    {
      rect: { r_x: 11, r_y: 345 },
      text: { t_x: 30, t_y: 375, transform: "" },
    },
  ]
  const {
    rect: { r_x, r_y },
    text: { t_x, t_y, transform },
  } = cubePosTable[cubePos]
  return (
    <>
      <rect
        x={r_x}
        y={r_y}
        rx={5}
        ry={5}
        width={38}
        height={38}
        className="primary"
        stroke={divider}
        strokeWidth={1}
        filter="url(#shadow)"
      />
      <text
        x={t_x}
        y={t_y}
        transform={transform}
        fill="#eeeeee"
        textAnchor="middle"
        fontSize={30}
      >
        {/* {_source.Crawford ? "Cr." : cubeValue} */}
        {cubeValue}
      </text>
    </>
  )
}
