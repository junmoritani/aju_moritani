import React from "react";
import SelecaoImg from "../../imgs/ComoFunciona/Selecao.png";
import FazendeiroImg from "../../imgs/ComoFunciona/Fazendeiro.png";
import AprovacaoImg from "../../imgs/ComoFunciona/Aprovacao.png";
import EntregaImg from "../../imgs/ComoFunciona/Entrega.png";
import "./index.css";

function ServiceDescription() {
  return (
    <div className=" flex w-full gap-12 flex-wrap justify-center">
      <div className="CardSteps">
        <h1>Você escolhe seus produtos</h1>
        <br />
        <img className="" src={SelecaoImg} alt="" />
      </div>
      <div className="CardSteps">
        <h1>Nós enviamos suas escolhas ao produtor mais próximo de você</h1>
        <br />
        <img src={FazendeiroImg} alt="" />
      </div>
      <div className="CardSteps">
        <h1>Você aprova o pedido pela foto da compra</h1>
        <br />
        <img src={AprovacaoImg} alt="" />
      </div>
      <div className="CardSteps">
        <h1>Nós enviamos a compra para sua casa</h1>
        <br />
        <img src={EntregaImg} alt="" />
      </div>
    </div>
  );
}

export default ServiceDescription;
