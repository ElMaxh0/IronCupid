import react from "react";
import { ProjectHost } from "../hostdetect/host";
import { FooterStyles } from "./styled";
function Footer(){
    return(
        <FooterStyles>
            <div id={'Copirights footer '} >
                <h4>Feito Com 	&10084; por Alexandre Picinatto  </h4>
                <h4>{ProjectHost} is a AleHot Projekt </h4>
                <h4> Maded by 123alehot.net.br</h4>
                <h4> Developed in <a href={"/wellcome"}>React </a></h4>
            </div>
        </FooterStyles>
    )
}
export{
    Footer
}