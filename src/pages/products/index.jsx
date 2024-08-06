import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer";
import Pills from "../../components/Pills";
import Search from "../../components/Search";
// import { allProducts } from "../../mock/products";
import Item from "../../components/Item";
import { collection, getDocs } from "firebase/firestore";
import db from "../../services/firebase";

function Products() {
  //States
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  //React Router Dom (filtros e search)
  const { filter } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  //Construção de pílulas
  const uniqueProductTypes = new Set();
  const pills = allProducts
    .map((product) => {
      if (!uniqueProductTypes.has(product.type)) {
        uniqueProductTypes.add(product.type);
        return product.type;
      }
    })
    .filter((type) => type !== undefined);

  //Pesquisa
  function searchProducts(query) {
    // Convertendo a consulta para letras minúsculas para garantir uma correspondência sem distinção entre maiúsculas e minúsculas
    const queryLowerCase = query.toLowerCase();

    // Filtrando os produtos com base na consulta de pesquisa
    const filteredProducts = allProducts.filter((product) => {
      // Convertendo o nome do produto para letras minúsculas
      const productNameLowerCase = product.title.toLowerCase();
      // Verificando se a consulta de pesquisa está presente no nome do produto
      return productNameLowerCase.includes(queryLowerCase);
    });

    // Retornando o array filtrado
    return filteredProducts;
  }

  // filtro da pílulas
  function filterProducts(type) {
    return allProducts.filter((product) => product.type === type);
  }

  //Montagem
  useEffect(() => {
    const itemsCollection = collection(db, "produtos");
    getDocs(itemsCollection).then((snapshot) => {
      //usar id gerado pelo firebase
      // setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data() })));
      setAllProducts(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  //Watcher (search params)
  useEffect(() => {
    if (searchParams.get("search")) {
      setProducts(searchProducts(searchParams.get("search")));
    } else {
      setProducts(allProducts);
    }
  }, [searchParams]);

  //Watcher (filter)
  useEffect(() => {
    if (filter) {
      setProducts(filterProducts(filter));
    } else {
      setProducts(allProducts);
    }
  }, [filter]);

  return (
    <div className="Products">
      <Search />
      <Pills types={pills} />
      <ItemListContainer />
      {/* <div className="flex flex-wrap gap-10">
        {products.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div> */}
    </div>
  );
}

export default Products;
