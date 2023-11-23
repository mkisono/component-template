import React from "react"

const divider = "rgba(0,0,0,0.12)"

const CheckerOnPoint = ({ side, left, position, bar = false }) => {
  if (position === 0) return null
  const num = Math.abs(position)
  const maxRenderNum = bar ? 3 : 5
  const maxNum = Math.min(num, maxRenderNum)
  const checkers = []
  const className = position > 0 ? "player0" : "player1"
  let top = side === "up" ? 25 : 369
  let offset = side === "up" ? 128 : 113
  if (bar) {
    top = side === "up" ? 257 : 137
    offset -= 60
  }
  for (let i = 0; i < maxNum; i++) {
    checkers.push(
      <circle
        key={i}
        cx={left}
        cy={side === "up" ? top + i * 30 : top - i * 30}
        r={15}
        className={className}
        stroke={divider}
        strokeWidth={1}
        filter="url(#shadowChecker)"
      />
    )
  }
  if (num > maxRenderNum) {
    checkers.push(
      <text
        key={left}
        x={left}
        y={side === "up" ? top + offset : top - offset}
        fill="#eeeeee"
        textAnchor="middle"
        fontSize={22}
      >
        {num}
      </text>
    )
  }
  return checkers
}

export const Checker = ({ position }) => {
  const pos24to19 = position.slice(1, 7).reverse()
  const pos13to18 = position.slice(7, 13).reverse()
  const pos7to12 = position.slice(13, 19)
  const pos6to1 = position.slice(19, 25)
  const checkers = []
  checkers.push(
    pos24to19.map((point, i) => {
      const x = 299 + i * 30
      return <CheckerOnPoint key={i} side="down" left={x} position={point} />
    })
  )
  checkers.push(
    pos13to18.map((point, i) => {
      const x = 75 + i * 30
      return <CheckerOnPoint key={i} side="down" left={x} position={point} />
    })
  )
  checkers.push(
    pos7to12.map((point, i) => {
      const x = 75 + i * 30
      return <CheckerOnPoint key={i} side="up" left={x} position={point} />
    })
  )
  checkers.push(
    pos6to1.map((point, i) => {
      const x = 299 + i * 30
      return <CheckerOnPoint key={i} side="up" left={x} position={point} />
    })
  )

  // borne off checkers
  const playerChecker = position.filter((value) => value > 0)
  const numplayerOff = 15 - playerChecker.reduce((prev, curr) => prev + curr)
  checkers.push(
    <CheckerOnPoint key={100} side="down" left={494} position={numplayerOff} />
  )

  const opponentChecker = position.filter((value) => value < 0)
  const numOpponentOff =
    -15 - opponentChecker.reduce((prev, curr) => prev + curr)
  checkers.push(
    <CheckerOnPoint key={101} side="up" left={494} position={numOpponentOff} />
  )

  // checkers on the bar
  const playerOnTheBar = position[25]
  checkers.push(
    <CheckerOnPoint
      key={102}
      side="down"
      left={262}
      position={playerOnTheBar}
      bar={true}
    />
  )
  const opponentOnTheBar = position[0]
  checkers.push(
    <CheckerOnPoint
      key={103}
      side="up"
      left={262}
      position={opponentOnTheBar}
      bar={true}
    />
  )

  return checkers
}
