import { Avatar } from "@mui/material";
interface tipoIcone {
    icone : JSX.Element
}
function Icones(info : tipoIcone) {
    return <Avatar sx={{ margin: "30px 15px", backgroundColor: "#8B8EA0" }}>{ info.icone }</Avatar>;
}
export default Icones;