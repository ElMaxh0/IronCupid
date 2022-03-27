import React from "react";
import { useContent } from "../../../hooks/contentid";
import { MenuBar } from "./styled";
import "./styles.css"

function NavMenu(){
    const {content, setContent} =useContent()

    return(
        <>
            <MenuBar>
                <i className={"fas fa-phone"} onClick={() => setContent(1)}/>
                <i style={{color:"red"}} className={"fas fa-check"} onClick={() => setContent(599)}/>
                <i className={"fas fa-user"} onClick={() => setContent(3)} />
            </MenuBar>
        </>
    )
}
export{
    NavMenu
}