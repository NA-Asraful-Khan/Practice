import "./App.css";
import AllAPI from "./Componants/API/AllAPI";
import GetDataAPI from "./Componants/AXIOS/GetDataAPI";
import Form from "./Componants/Form";
import FormValidation from "./Componants/FormValidation";
import HOC from "./Componants/HOC";
import ROUTER_ROOT from "./Componants/REACT_ROUTER_PRAC/ROUTER_ROOT";
import USE_TRANSITATION from "./Componants/USE_TRANSITATION";




function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* ----------------------Hooks  */}
      {/* <Form></Form>
      <FormValidation></FormValidation>
      <HOC></HOC>
      <USE_TRANSITATION></USE_TRANSITATION> */}
      {/* -------------------React Router  */}
      {/* <ROUTER_ROOT></ROUTER_ROOT> */}
      {/* ---------------------- api calling */}
      {/* <AllAPI></AllAPI>
      <GetDataAPI></GetDataAPI> */}
      
    </div>
  );
}

export default App;
