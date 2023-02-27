import Navbar from "../components/Navbar";
import { ImagemPerfil, BoxImagemPerfil, FundoPerfil,FundoPerfil2 } from "./AboutStyles";
import { SubTitulo, Botao } from "../styles/estilos";
import { Typography, Grid } from "@mui/material";
import imgPerfil from "../images/garota.png";
import imgPontilhado from "../images/dots.png";
import Footer from "../components/Footer";
function About() {
    return(
        <>
            <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{width:"100%", marginBottom: "100px"}}>
                <Grid item xs={6} container justifyContent="center">
                    <BoxImagemPerfil>
                        <ImagemPerfil src={ imgPerfil }/>
                        <FundoPerfil src={ imgPontilhado }/>
                        <FundoPerfil2 src={ imgPontilhado }/>
                    </BoxImagemPerfil>
                </Grid>
                <Grid item xs={6}>
                    <SubTitulo>Bit about me</SubTitulo>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</Typography>
                    <Botao variant="contained" sx={{ marginTop: "5%" }}>Download CV</Botao>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}
export default About;