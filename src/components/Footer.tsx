import { memo } from "react";
import { Cabecalho, perfilCabecalho, TextoFooter, Destaque } from "./FooterStyles";
import { SubTitulo, Texto } from "../styles/estilos";
import { Avatar, Grid } from "@mui/material";
import Icones from "../components/Icones";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
function Footer() {
    const icones = [{ icone: <TwitterIcon />, link: "https://twitter.com/" }, { icone: <LinkedInIcon />, link: "https://www.linkedin.com/"}, { icone: <InstagramIcon />, link: "https://www.instagram.com/" }, { icone: <FacebookIcon />, link: "https://www.facebook.com/"}, { icone: <MailIcon />, link: "https://mail.google.com" }];
    return (
        <Cabecalho container alignItems="center" justifyContent="center" flexDirection="column">
            <Avatar sx={ perfilCabecalho }>M</Avatar>
            <SubTitulo sx={{ fontSize: "30px" }}>Let’s Talk with Me!</SubTitulo>
            <TextoFooter>I am always open to discuss your project, improve your online presence or help with your UI/UX deesign</TextoFooter>
            <Grid container justifyContent="center">
                { icones.map((elem) => { return <a className="social" href={ elem.link } target="_blank"><Icones icone={ elem.icone }/></a>; }) }
            </Grid>
            <Texto sx={{ margin: "40px 0 15px 0" }}>Created by <Destaque>Zarror</Destaque> | All Reserved!</Texto>
        </Cabecalho>
    )
}
export default memo(Footer);