import logo from "./logo.svg";
import "./App.css";
import FunctionalComp from "./my-code/FunctionalComp";
import ClassComp from "./my-code/ClassComp";
import CompInComp from "./my-code/CompInComp";
import ClickEventAndFunction from "./my-code/ClickEventAndFunction";
import StateInFunctionalComp from "./my-code/StateInFunctionalComp";
import StateInClassComp from "./my-code/StateInClassComp";
import PropsWithFunctionalComp from "./my-code/PropsWithFunctionalComp";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* My Componants */}
        <FunctionalComp />
        <ClassComp />
        <CompInComp />
        <ClickEventAndFunction />
        <StateInFunctionalComp />
        <StateInClassComp />
        <PropsWithFunctionalComp />
      </header>
    </div>
  );
}

export default App;
