import "./style.css";
import ItemListContainer from "../../components/ItemListContainer";
import "../../services/firebase";
import PresentationCard from "../../components/PresentationCard";
import ServiceDescription from "../../components/ServiceDescription";

function Main() {
  return (
    <div className="my-24 flex flex-col gap-24 justify-around items-center">
      <PresentationCard />
      <ServiceDescription />
      <ItemListContainer />
    </div>
  );
}

export default Main;
