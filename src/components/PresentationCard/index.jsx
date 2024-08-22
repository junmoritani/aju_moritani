import React from "react";
import FarmerImg from "../../imgs/Misc/pexels-zen-chung-5529606 2@2x.png";
import UmbuLogo from "../UmbuLogo";

function PresentationCard() {
  return (
    <div className="flex flex-col-reverse gap-10 md:flex-row md:gap-0 rounded-3xl shadow-md bg-greenUmbu w-3/5  p-6 justify-center items-center">
      <div className="flex flex-col md:w-2/3 h-full justify-between items-center md:text-left  text-white">
        <p className="text-lg">
          O UMBU é onde você pode fazer suas compras de produtos orgânicos
          diretamente de uma rede de produtores locais próximos a você.
        </p>
        <br />
        <br />
        <h3 className="text-xl font-bold">
          Fortaleça a economia local mantendo uma alimentação saudável e
          balanceada.
        </h3>
      </div>
      <div className="h-full w-auto flex items-center justify-center">
        <img
          className="h-48 w-48 rounded-full shadow-md object-cover"
          src={FarmerImg}
          alt="ImagemFazendaira"
        />
      </div>
    </div>
  );
}

export default PresentationCard;
