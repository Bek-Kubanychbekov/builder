
import Layout from "./components/Layout/Layout" ;
import PizzaBuilder from "./components/PizzaBuilder/Flower" ;
import Checkout from "./components/Checkout/Checkout"
import "./App.css" ;
import { Redirect, Route, Switch } from "react-router";
import Orders from "./components/Orders/Orders";

const App =() =>{
  return (
    <div className="App">
      <Layout>      <Switch>
    <Route path="/"component={PizzaBuilder}exact/>
    <Route path="/checkout"component={Checkout}/>
    <Route path="/orders" component={Orders} />
    <Redirect to="/"/>
    </Switch>
    </Layout></div>
   
  );
}

export default App;