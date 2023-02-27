import { styled, Box } from "@mui/material"; 
export const BoxImagemPerfil = styled(Box)(() => ({
    position: "relative",
    top: "6vw",
    width: "38vw",
    overflow: "hidden",
    maxHeight: "72vh"
}));
export const FundoPerfil = styled('img')(() => ({
    position: "absolute",
    width: "13.5vw",
    left: "4.8vw",
    top: "2.6vw",
    zIndex: "-1"
}));
export const FundoPerfil2 = styled('img')(() => ({
    position: "absolute",
    width: "13.5vw",
    right: "1.58vw",
    top: "19.7vw",
    zIndex: "-1"
}));
export const ImagemPerfil = styled('img')(() => ({
    clipPath: "circle(36% at 55% 36.6%)",
    width: "100%"
}))