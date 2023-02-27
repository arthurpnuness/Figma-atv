import { Typography, SvgIcon, Grid } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import perfil from "../images/garota.png";
import { textoHome, ImgPerfil, iconeFlecha, FooterRedes, ImgRedes, nomeLateral } from "./HomeStyles";
import dribleeIMG from "../images/Vector.png";
import mediumIMG from "../images/Shape.png";
import behanceIMG from "../images/Vector-Be.png";
import linkedinIMG from "../images/path18.png";
const Icone = () => (
  <>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1} gradientTransform="rotate(300)">
        <stop offset={0} stopColor="rgba(237,163,86,1)" />
        <stop offset={1} stopColor="rgba(234,103,94,1)" />
      </linearGradient>
    </svg>
    <EastIcon sx={iconeFlecha} />
  </>
)
function Home() {
  return (
    <>
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>Michael<br /> User Interface<br /> Designer</Typography>
      <Typography variant="subtitle1" sx={textoHome}>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</Typography>
      <a className="destaque" href="https://mail.google.com" target="_blank">
        <Typography variant="caption">Let's Talk <SvgIcon component={Icone} /></Typography>
      </a>
      <ImgPerfil src={perfil} />
      <Typography variant="h5" sx={nomeLateral}>Michael</Typography>
      <FooterRedes container>
        <Grid item>
          <ImgRedes src={dribleeIMG} />
        </Grid>
        <Grid item>
          <ImgRedes src={linkedinIMG} />
        </Grid>
        <Grid item>
          <ImgRedes src={mediumIMG} />
        </Grid>
        <Grid item>
          <ImgRedes src={behanceIMG} />
        </Grid>
      </FooterRedes>
    </>
  );
}
export default Home;
