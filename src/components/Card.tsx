import { CardBox, Titulo } from "./CardStyles";
import { Texto } from "../styles/estilos";
interface infosCard {
    icone: JSX.Element,
    titulo: string,
    texto: string
}
function Card(infos : infosCard) {
    return (
    <CardBox>
        {infos.icone}
        <Titulo variant="h4">{infos.titulo}</Titulo>
        <Texto variant="body1">{infos.texto}</Texto>
    </CardBox>
    );
}
export default Card;