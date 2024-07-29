import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../services/firebase";
import OrderItem from "../../components/OrderItem";

function Orders() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "pedidos");
    getDocs(itemsCollection).then((snapshot) => {
      //usar id gerado pelo firebase
      // setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setPedidos(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <div className="mt-4 px-6">
      <h1 className="text-2x1 font-bold">Pedidos</h1>
      {pedidos.map((order, index) => (
        <OrderItem item={order} index={index + 1} key={index} />
      ))}
    </div>
  );
}

export default Orders;
