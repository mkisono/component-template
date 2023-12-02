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
  value: number
}

class SliderWithButtons extends StreamlitComponentBase<State> {
  public state = { value: this.props.args["value"] }

  public render = (): ReactNode => {
    const name = this.props.args["name"]
    const { theme } = this.props

    const handleChange = (event: Event, newValue: number | number[]) => {
      this.setState({ value: newValue as number })
      Streamlit.setComponentValue(newValue)
    }

    const handleIncrease = () => {
      const newValue = this.state.value + 1
      if (newValue > 100) return
      this.setState({ value: newValue })
      Streamlit.setComponentValue(newValue)
    }

    const handleDecrease = () => {
      const newValue = this.state.value - 1
      if (newValue < 0) return
      this.setState({ value: newValue })
      Streamlit.setComponentValue(newValue)
    }

    return (
      <Box>
        <Stack direction="row" justifyContent={"space-between"}>
          <Stack direction="column" justifyContent={"flex-start"}>
            <Typography id="continuous-slider" sx={{ color: theme?.textColor }}>
              {name}
            </Typography>
          </Stack>
          <Stack
            sx={{ padding: 1 }}
            spacing={2}
            direction="row"
            justifyContent={"flex-end"}
          >
            <IconButton
              aria-label="Remove"
              onClick={handleDecrease}
              sx={{ margin: 0, color: theme?.primaryColor }}
            >
              <Remove />
            </IconButton>
            <IconButton
              aria-label="Add"
              onClick={handleIncrease}
              sx={{ margin: 0, color: theme?.primaryColor }}
            >
              <Add />
            </IconButton>
          </Stack>
        </Stack>
        <Stack sx={{ padding: 3 }}>
          <Slider
            aria-label={name}
            valueLabelDisplay="on"
            value={this.state.value}
            onChange={handleChange}
            sx={{ color: theme?.primaryColor }}
          />
        </Stack>
      </Box>
    )
  }
}

export default withStreamlitConnection(SliderWithButtons)
