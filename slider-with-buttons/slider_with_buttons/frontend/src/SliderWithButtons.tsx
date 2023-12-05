import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Slider from "@mui/material/Slider"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Remove from "@mui/icons-material/Remove"
import Add from "@mui/icons-material/Add"

interface State {
  values: number[]
}

class SliderWithButtons extends StreamlitComponentBase<State> {
  public state = { values: this.props.args["values"] }

  public render = (): ReactNode => {
    const names = this.props.args["names"]
    const { theme } = this.props
    const colors = ["#308FB8", theme?.primaryColor, "#71B784"]

    const handleChange = (event: Event, newValues: number | number[]) => {
      this.setState({ values: newValues as number[] })
      Streamlit.setComponentValue(newValues)
    }

    const handleIncrease = (i: number) => () => {
      const newValues = [...this.state.values]
      newValues[i] += 1
      if (newValues[i] > 100) return
      if (i < 2) {
        if (newValues[i] > newValues[i + 1]) return
      }
      this.setState({ values: newValues })
      Streamlit.setComponentValue(newValues)
    }

    const handleDecrease = (i: number) => () => {
      const newValues = [...this.state.values]
      newValues[i] -= 1
      if (newValues[i] < 0) return
      if (i > 0) {
        if (newValues[i] < newValues[i - 1]) return
      }
      this.setState({ values: newValues })
      Streamlit.setComponentValue(newValues)
    }

    return (
      <Box>
        <Stack sx={{ padding: 2 }}>
          <Slider
            track={false}
            value={this.state.values}
            onChange={handleChange}
            sx={{ color: theme?.primaryColor }}
          />
        </Stack>
        <Stack direction="row" justifyContent={"space-between"}>
          {[0, 1, 2].map((i) => (
            <Stack sx={{ padding: 1 }} spacing={1} direction="row" key={i}>
              <IconButton
                aria-label="Remove"
                onClick={handleDecrease(i)}
                sx={{ margin: 0, color: colors[i] }}
              >
                <Remove />
              </IconButton>
              <IconButton
                aria-label="Add"
                onClick={handleIncrease(i)}
                sx={{ margin: 0, color: colors[i] }}
              >
                <Add />
              </IconButton>
            </Stack>
          ))}
        </Stack>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          {[0, 1, 2].map((i) => (
            <Typography
              key={i}
              sx={{ color: colors[i], fontWeight: "bold", padding: 1 }}
            >
              {names[i]}
            </Typography>
          ))}
        </Stack>
      </Box>
    )
  }
}

export default withStreamlitConnection(SliderWithButtons)
