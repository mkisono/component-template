import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React from "react"
import { Board } from "./Board"
import { Triangle } from "./Triangle"
import { Points } from "./Points"
import { Checker } from "./Checker"
import { Pip } from "./Pip"
import { Cube } from "./Cube"
import "./index.css"

class Position extends StreamlitComponentBase {
  render = () => {
    const { position, cube } = this.props.args["entry"]
    return (
      <svg viewBox="0 0 524 394" style={{ display: "block" }}>
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="2"
              dy="2"
              stdDeviation="2"
              floodColor="grey"
              floodOpacity="0.2"
            />
          </filter>
        </defs>
        <defs>
          <filter id="shadowChecker">
            <feDropShadow
              dx="1"
              dy="1"
              stdDeviation="2"
              floodColor="grey"
              floodOpacity="0.2"
            />
          </filter>
        </defs>
        <Board />
        <Triangle />
        <Points />
        <Cube cube={cube}/>
        <Checker position={position} />
        <Pip position={position} />
      </svg>
    )
  }
}

export default withStreamlitConnection(Position)
