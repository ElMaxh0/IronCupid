import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useContent } from "../../hooks/contentid";
import { useImgUrl } from "../../hooks/imgurl";
import { PeopleImage } from "../card/styles";
import { Bot } from "../chat";

export function PeopleData(){
    const {content, setContent} =useContent()
    const {ImgUrl, setImgUrl} = useImgUrl();
    return(
        <>
            <div style={{
                width:"100%",
                height:"100%",
                position :"relative",
                borderRadius:"25px",
            }}>
                <div style={{
                    width:"100%",
                    height:"100%",
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat",
                    backgroundImage: `url("${ImgUrl}")` 
                }}>
                    <div className="personalinfo">
                        <div className="nameage">
                            <h1>Alexandre</h1>
                            <h2>17</h2>
                            <div>
                                <h4>Bonito e Gostoso</h4>
                            </div>
                            <div>
                                <h4>Bonito e Gostoso</h4>
                            </div>
                            <div>
                                <h4>Bonito e Gostoso</h4>
                            </div>
                            <div className="acoes">
                                <i className={"fas fa-times"} />
                                <i className={"fas fa-star"} />
                                <i className={"fas fa-check"} onClick={ () => setContent(2)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}