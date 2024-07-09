import Item from "../Item";

function ItemList({ items }) {
  return (
    <div className="ItemList">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
