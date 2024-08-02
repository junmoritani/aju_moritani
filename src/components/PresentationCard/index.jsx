import React from "react";
import FarmerImg from "../../imgs/Misc/pexels-zen-chung-5529606 2@2x.png";
import UmbuLogo from "../UmbuLogo";

function PresentationCard() {
  return (
    <div className="flex rounded-3xl shadow-md bg-greenUmbu w-3/5 h-60 p-8 justify-center items-center">
      <div className="flex flex-col  w-2/3 h-full justify-between items-center text-left text-white">
        <p className="text-lg   ">
          O UMBU é onde você pode fazer suas compras de produtos orgânicos
          diretamente de uma rede de produtores locais próximos a você.
        </p>

        <h3 className="text-xl  font-bold">
          Fortaleça a economia local mantendo uma alimentação saudável e
          balanceada
        </h3>
      </div>
      <div className="h-full ">
        <img
          className="h-full rounded-full shadow-md"
          src={FarmerImg}
          alt="ImagemFazendaira"
        />
      </div>
    </div>
  );
}

export default PresentationCard;
