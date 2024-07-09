function ItemDetail({ Item }) {
  return (
    <div className="ItemDetail">
      <img src={Item.pictureUrl} alt="" />
      <h3>{Item.description}</h3>
      <h2>{Item.price}</h2>
    </div>
  );
}

export default ItemDetail;
