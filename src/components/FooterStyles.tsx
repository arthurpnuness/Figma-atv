import { styled, Grid } from "@mui/material";
import { temaPadrao } from "../temas/temaPadrao";
import { Texto } from "../styles/estilos";
export const Cabecalho = styled(Grid) (() => ({
    margin: "30px 0 10px 0",
}));
export const perfilCabecalho = {
    backgroundImage: temaPadrao.gradiente.padrao,
    width: "50px",
    height: "50px",
    fontSize: "25px",
    margin: "10px 0"
};
export const TextoFooter = styled(Texto) (() => ({
    textAlign: "center",
    maxWidth: "470px",
    fontSize: "16px"
}));
export const Destaque = styled('span')(() => ({
    fontFamily: "neometric-bold",
    fontSize: "16px",
    color: "#FFFFFF" 
}))