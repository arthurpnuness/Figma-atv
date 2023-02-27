import { styled, Typography, Button } from "@mui/material"
import { temaPadrao } from "../temas/temaPadrao";
export const SubTitulo = styled(Typography)(() => ({
    fontFamily: "neometric-bold",
    fontSize: "50px",
}));
export const Botao = styled(Button)(() => ({
    textTransform: "none",
    backgroundImage: temaPadrao.gradiente.padrao,
    borderRadius: "23px",
    padding: "6px 17px",
    fontSize: "17px"
}));
export const Texto = styled(Typography)(() => ({
    fontSize: "14px",
    maxWidth: "25vw",
    fontFamily: "neometric-light",
    color: "rgba(255, 255, 255, 0.65)",
}));
