import { styled, Box, Typography } from "@mui/material";
import { temaPadrao } from "../temas/temaPadrao";
export const CardBox = styled(Box)(() => ({
    padding: "30px 6px",
    borderRadius: "35px",
    backgroundImage: temaPadrao.gradiente.padrao,
    textAlign: "center",
    margin: "6px",
    boxShadow: " rgba(0, 0, 0, 0.6) 1px 2px 1px"
}));
export const iconeCard = {
    height: "45px",
    width: "45px",
    marginBottom: "10px"
};
export const Titulo = styled(Typography)(() => ({
    fontFamily: "neometric-bold",
    fontSize: "22px",
    marginBottom: "8px",
}));