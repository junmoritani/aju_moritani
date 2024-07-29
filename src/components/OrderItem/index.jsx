import React from "react";

function OrderItem({ item, index }) {
  return (
    <div className="my-4 border-2 border-ambar-400">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Pedido nº {index}</h1>
        <p>
          {item.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className="mt-2">
        <h2 className="flex font-semibold text-lg">Produtos</h2>
        {item.products.map((product) => (
          <div className="flex ml-4">
            <h3 className="font-semibold">{product.title}</h3>
            <h4 className="ml-6">x {product.quantity}</h4>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <h2 className="flex font-semibold text-lg">Endereço</h2>
        <p className="flex ml-4">
          {item.address.street}, {item.address.number},{" "}
          {item.address.neighborhood}
        </p>
        <p className="flex ml-4">
          {item.address.cep}, {item.address.city} - {item.address.state}
        </p>
      </div>
    </div>
  );
}

export default OrderItem;
