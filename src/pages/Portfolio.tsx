import { Grid } from "@mui/material";
import { SubTitulo, Texto } from "../styles/estilos";
import { CardImg, BarraConquistas, MiniTitulo, Complemento } from "../pages/PortfolioStyles";
import imgNucleo from "../images/unsplash6.png";
import imgLivro from "../images/unsplash2.png";
import imgCereal from "../images/unsplash3.png";
import imgArte from "../images/unsplash4.png";
import imgDesign from "../images/unsplash1.png";
import imgStickers from "../images/unsplash5.png";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Footer from "../components/Footer";
function Portfolio() {
    const imagens = [ imgNucleo, imgStickers, imgArte, imgDesign, imgCereal, imgLivro ];
    return (
        <>
            <Grid container>
                <Grid xs={12}>
                    <SubTitulo sx={{ fontSize: "38px" }}>Latest Portfolio</SubTitulo>
                    <Texto sx={{ maxWidth: "420px", marginBottom: "17px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</Texto>
                </Grid>
                <Grid xs={12} container justifyContent="space-between">
                    { imagens.map((imagem) => { return <CardImg src={ imagem } /> }) }
                </Grid>
                <BarraConquistas xs={12} container>
                    <Grid item xs={4}>
                        <StarIcon sx={{ width: "35px", height: "35px" }} />
                        <MiniTitulo variant="h4">15 National</MiniTitulo>
                        <Complemento variant="h5">Awards</Complemento>
                    </Grid>
                    <Grid item xs={4} sx={{ borderLeft: "1px solid #FFFFFF", paddingLeft: "10px" }}>
                        <AutoAwesomeMotionIcon sx={{ width: "35px", height: "35px" }} />
                        <MiniTitulo variant="h4">1500+ Happy</MiniTitulo>
                        <Complemento variant="h5">Customers</Complemento>
                    </Grid> 
                    <Grid item xs={4} sx={{ borderLeft: "1px solid #FFFFFF", paddingLeft: "10px" }}>
                        <FavoriteIcon sx={{ width: "35px", height: "35px" }} />
                        <MiniTitulo variant="h4">2700+ Lovely</MiniTitulo>
                        <Complemento variant="h5">Feedbacks</Complemento>
                    </Grid>                    
                </BarraConquistas>
            </Grid>
            <Footer />
        </>
    );
}
export default Portfolio;