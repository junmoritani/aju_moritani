import Item from "../Item";
import { useCart } from "../../context/CartContext";

function ItemList({ items }) {
  return (
    <div className="flex flex-wrap gap-10">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
