import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AddRecord from "./components/AddRecord";
import { useGlobalContext } from "./components/context";
import ShowTransaction from "./components/ShowTransaction";

function App() {
  const { transactions } = useGlobalContext();
  //console.log(transactions);

  return (
    <div>
      <AddRecord />
      <ShowTransaction />
    </div>
  );
}

export default App;
