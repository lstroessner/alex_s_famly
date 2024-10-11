import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        display="flex"
        justifyContent="flex-start"
      >
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Famly
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Rechner</Button>
            <Button variant="contained">Wie gerechnet wird</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
