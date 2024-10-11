import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        display="flex"
        justifyContent="flex-start"
      >
        <Toolbar disableGutters>
          <Stack direction="row" spacing={5}>
            {" "}
            <img src="famly_logo.png" alt="Logo" className="logo" height="60" />
            <Button variant="text">Rechner</Button>
            <Button variant="text">Wie gerechnet wird</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
