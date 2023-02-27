import { Grid } from "@mui/material"
import { SubTitulo } from "../styles/estilos";
import { iconeCard } from "../components/CardStyles";
import Card from "../components/Card"
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import ShareIcon from '@mui/icons-material/Share';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Footer from "../components/Footer";
function Services() {
    interface infoCards {
        titulo: string,
        icone: JSX.Element
    };
    const cardsLista : Array<infoCards> = [
        {
            titulo: "Web Design",
            icone: <BrushIcon sx={ iconeCard }/>,
        },
        {
            titulo: "Web Development",
            icone: <CodeIcon sx={ iconeCard }/>,
        },
        {
            titulo: "Marketing",
            icone: <ShareIcon sx={ iconeCard }/>,
        },
        {
            titulo: "Photograpy",
            icone: <PhotoCameraIcon sx={ iconeCard }/>,
        },
        {
            titulo: "Copy Paste",
            icone: <ContentCopyIcon sx={ iconeCard }/>,
        },
        {
            titulo: "Organizing",
            icone: <Diversity3Icon sx={ iconeCard }/>,
        },
    ];
    return(
        <>
            <Grid container alignItems="center">
                    <Grid item xs={12}>
                        <SubTitulo sx={{textAlign: "center", marginTop: "-3vw"}}>My Best Services</SubTitulo>
                    </Grid>
                <Grid item xs={12} container justifyContent="center">
                { cardsLista.map((card) => {
                    return <Card icone={ card.icone } titulo={ card.titulo } texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." />; 
                }) }
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}
export default Services;