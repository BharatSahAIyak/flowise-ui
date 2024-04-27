import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import themes from "../../themes";
import NavigationScroll from "../../layout/NavigationScroll";
import Canvas from "../../views/canvas"; // Direct import without lazy loading
// import Loadable from "./loading/Loadable";
import { useEffect } from "react";

const Flowise = () => {
  const customization = useSelector((state: any) => state.customization);

  useEffect(() => {
    localStorage.setItem("temp", "tempValue");

    if (localStorage.getItem("temp2")) {
      console.log("temp2 found", localStorage.getItem("temp2"));
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Canvas />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Flowise;
