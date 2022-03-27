import React from "react";
import "./styles.css"
function AccountInfo(){
    return(
        <>
        <div style={{
            height:"100%",overflow:"scroll"
        }}>
            <div>
                <div>
                    <div className="imgusercontainer">
                        <img className={"userimage"} src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/4-Writer-256.png"} />
                    </div>
                    <div className={"userinfo"}>
                        <div>
                            <h1>NOME</h1>
                            <h1>SOBRENOME</h1>
                            <h4>17 Anos </h4>
                        </div>
                        <div style={{
                                textAlign:"left"
                            }}>
                                <h2>Dados de Contato </h2>
                                <hr />
                                <p>(11)12345-6789</p>
                                <p>seusitetop.com.br</p>
                            </div>
                    
                        <div style={{
                                textAlign:"left"
                            }}>
                                <h2>Dados Pessoais </h2>
                                <hr />
                                <p>Mora em algum lugar N 23</p>
                                <p>http://allmylinks/ALGOALEATORIO</p>
                            </div>
                        <div style={{
                            float:"left",
                        }}>
                            <>
                            <div style={{
                                textAlign:"left"
                            }}>
                                <h2>Formacao</h2>
                                <hr />
                                <p> Graduado em Alguma Coisa </p>
                                <p>Frequentou Univercidade Geral do Pau Bonito </p>
                                <p>Pei</p>
                            </div>
                            <div style={{
                                textAlign:"left"
                            }}>
                                <h2>Atividades Extras </h2>
                                <hr />
                                <p> Algum Serviço Legal</p>
                                <p>Algum Hobbie Legal </p>
                                <p>Sla </p>
                            </div>
                            <div style={{
                                textAlign:"left"
                            }}>
                                <h2>Experiencias</h2>
                                <hr />
                                <p>Lugar 1</p>
                                <p>Lugar 2</p>
                                <p>Lugar 3</p>
                            </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export{
    AccountInfo
}