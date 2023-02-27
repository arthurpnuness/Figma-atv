import { Grid, styled, Typography } from "@mui/material"
import { temaPadrao } from "../temas/temaPadrao";
export const BarraConquistas = styled(Grid)(() => ({
    backgroundImage: temaPadrao.gradiente.padrao2,
    borderRadius: "16px",
    width: "100%",
    padding: "15px",
    margin: "15px 0"
}));
export const CardImg = styled('img')(() => ({
    width: "32.5%",
    borderRadius: "20px",
    margin: "0.6% 0"
}));
export const MiniTitulo = styled(Typography)(() => ({
    fontSize: "17px",
    fontFamily: "neometric-bold"
}));
export const Complemento = styled(Typography)(() => ({
    fontSize: "16px",
    fontFamily: "neometric-light"
}));