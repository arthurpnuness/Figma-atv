import { styled, Grid } from "@mui/material";
export const textoHome = {
    maxWidth: "43%",
    margin: "7px 0"
};
export const iconeFlecha = {
    fill: "url(#linearColors)",
    marginLeft: "15px",
    position: "relative",
    top: "5px"
};
export const ImgPerfil = styled('img')(()=>({
    position: "absolute",
    top: "18vh",
    width: "35%",
    right: "14.8%",
    zIndex: "-1",
    borderRadius: "50% 50% / 35% 35% 35% 35%"
}));
export const nomeLateral = {
    position: "absolute",
    right: "-2.5%",
    top: "48%",
    transform: "rotate(90deg)",
    letterSpacing: "20px",
    color: "#5D617A",
    fontFamily: "blooming",
    fontWeight: "bold",
    fontSize: "25px"
};
export const FooterRedes = styled(Grid)(() =>({
    paddingTop: "10.5vh",
    paddingBottom: "10px",
    justifyContent: "space-around",
}));
export const ImgRedes = styled('img')(() =>({
    height: "23px"
}))