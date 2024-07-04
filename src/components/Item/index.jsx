function Item({ item }) {
  return (
    <div className="Item">
      <img src={item.pictureUrl} alt="" />
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <h2>{item.price}</h2>
    </div>
  );
}

export default Item;
