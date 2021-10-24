import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "./components/main";
import Details from './pages/detail';
import Payment from "./pages/payment";
import Profil from "./pages/profil";
import Transaction from "./pages/transaction";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/profile" component={Profil} />
            <Route exact path="/transaction" component={Transaction} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
