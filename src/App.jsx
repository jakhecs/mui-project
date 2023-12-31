import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Feed, Navbar, Rightbar, Sidebar, Add, Form } from "./components";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
        {/* <Form /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
