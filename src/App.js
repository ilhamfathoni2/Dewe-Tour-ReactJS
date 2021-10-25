import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/main";
import Details from "./pages/detail";
import Payment from "./pages/payment";
import Profil from "./pages/profil";
import Transaction from "./pages/transaction";
import IncomeTrip from "./pages/incom-trip";
import Addtrip from "./pages/add-trip";
import PayWaitingApprove from "./pages/pay-waiting-approve";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/payment-waiting" component={PayWaitingApprove} />
        <Route exact path="/profile" component={Profil} />
        <Route exact path="/transaction" component={Transaction} />
        <Route exact path="/trip" component={IncomeTrip} />
        <Route exact path="/add-trip" component={Addtrip} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
