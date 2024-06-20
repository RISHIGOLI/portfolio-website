import { createTheme } from "@material-ui/core";
import { darkPalette, lightPalette } from "./palette";

export const lightTheme = createTheme({
    palette: lightPalette
})

export const darkTheme = createTheme({
    palette: darkPalette
})