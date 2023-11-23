import React from "react"

export const Pip = ({ position }) => {
  let pip0 = 0
  let pip1 = 0
  position.forEach((p, i) => {
    if (p > 0) {
      pip0 += i * p
    } else if (p < 0) {
      pip1 += (i - 25) * p
    }
  })
  return (
    <>
      <text
        x={262}
        y={26}
        fill="#eeeeee"
        textAnchor="middle"
        fontWeight="bold"
        fontSize={20}
      >
        {pip1}
      </text>
      <text
        x={262}
        y={382}
        fill="#eeeeee"
        textAnchor="middle"
        fontWeight="bold"
        fontSize={20}
      >
        {pip0}
      </text>
    </>
  )
}
