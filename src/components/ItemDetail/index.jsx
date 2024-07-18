import ItemCount from "../../components/ItemCount";
import { useState } from "react";
import Button from "../Button";

function ItemDetail({ Item }) {
  const [quantity, setQuantity] = useState(0);

  function submit() {}

  return (
    <div className="ItemDetail">
      <img src={Item.pictureUrl} alt="" />
      <h3>{Item.description}</h3>
      <h2>{Item.price}</h2>
      <ItemCount count={quantity} setCount={setQuantity} stock={10} />
      <Button onClick={submit}>Adicionar +</Button>
    </div>
  );
}

export default ItemDetail;
