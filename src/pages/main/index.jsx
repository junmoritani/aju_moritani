import "./style.css";
import ItemListContainer from "../../components/ItemListContainer";
import "../../services/firebase";
import SiteInfo from "../../components/ItemList/SiteInfo";

function Main() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SiteInfo />
      <ItemListContainer />
    </div>
  );
}

export default Main;
