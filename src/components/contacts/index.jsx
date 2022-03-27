import React from "react";
import { useBackground } from "../../hooks/background";
import { useContent } from "../../hooks/contentid";
import "./styles.css"
function LastContacts(){
    const {bgid, setbgid} =useBackground()
    const {content, setContent} =useContent()
    return(
        <>
        <div>
            <div>
            <div class="leftbar">
                    <div class="lasttalk">
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                        <div class="perfil" onClick={() => setContent(2)}>
                            <img src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/5-Manager-512.png"} />
                            <div>
                                <h3>Ola Mundo </h3>
                                <p>Oi Gatinho Lindo </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export{
    LastContacts
}