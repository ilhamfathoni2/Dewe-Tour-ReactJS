import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "./components/main";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
