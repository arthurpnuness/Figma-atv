import { createTheme } from "@mui/material/styles"
export const temaPadrao = createTheme({
    gradiente: {
      padrao: "linear-gradient(45deg, #EDA356, #EA675E)",
      padrao2: "linear-gradient(to bottom, #EA675E, #EDA356)",
    },
    typography: {
      h1: {
        fontSize: "80px"
      },
      h6: {
        margin: "0 12px"
      },
      subtitle1: {
        fontSize: "17px"
      },
      caption: {
        fontSize: "15px",
        fontWeight: "bolder",
        background: "linear-gradient(45deg, #EDA356, #EA675E)",
        backgroundClip: "text",
        textFillColor: "transparent",
        textTransform: "uppercase",
      }
    }
})