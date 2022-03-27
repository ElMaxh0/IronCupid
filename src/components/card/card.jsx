import React from "react";
import { PeopleData } from "../infos/peopleinfo";
import { Card, ContainerCards } from "./styles";
import "./styles.css";
import { useBackground } from "../../hooks/background";
import { useContent } from "../../hooks/contentid";
import { Bot } from "../chat";
import { LoadContent } from "../../app/app";

function Cards(){
    return (
        <>
        <div>
            <div className={"box"}>
                <ContainerCards>
                    <Card id="master">
                        <LoadContent />
                    </Card>
                </ContainerCards>
            </div>
        </div>
        </>
    )
}
export{
    Cards
}