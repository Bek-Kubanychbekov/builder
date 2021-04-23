import Layout from "./components/Layout/Layout" ;
import Animal from "./components/Animal/Animal" ;
import Checkout from "./components/Checkout/Checkout"
import "./App.css" ;
import { Redirect, Route, Switch } from "react-dom";
const App =() =>{
  return (
    <div className="App">
      <Layout>
        <Switch>
    <Route path="/"component={Animal}exact/>
    <Route path="/checkout"component={Checkout}/>
    <Redirect to="/"/>
    </Switch>
    </Layout>
    </div>
  );
}

export default App;