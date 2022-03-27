import react from "react";
import { MenuContainer, MenuNavigator } from "./style";
import './styles.css'
export function LeftMenu (){
    return(
        <div>
            <MenuContainer>
                <MenuNavigator>
                    <div className="menustyle">
                        <div style={{marginBottom:"5%"}}><a><span className={"title "}>Elemento </span></a></div>
                        <div className={"listiconmenuleft"} style={{marginBottom:"5%"}}><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                        <div><a><span className={"title"}>Elemento </span></a></div>
                    </div>
                </MenuNavigator>
            </MenuContainer>

        </div>
    )
}