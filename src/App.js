import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./images/icons/favicon.ico";
import "./vendor/animate/animate.css";
import "./vendor/select2/select2.min.css";
import "./vendor/perfect-scrollbar/perfect-scrollbar.css";
import "./css/util.css";
import "./css/main.css";
import "./js/main.js";
import Data from "./data";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Login from "./components/login";
import Hello from "./components/hello";
import index from "./components/index";
import Charts from "./components/Charts";
import Doughnutchart from "./components/Doughnut";
import LineChart from "./components/LineChart"
import BarChart1 from "./components/BarChart1"
import PieChart from "./components/PieChart"
import store from "./stroe";

var Tesseract = window.Tesseract;
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/Data" component={Data} />
        <Route exact path="/Index" component={index} />
        <Route exact path="/Doughnut" component={Doughnutchart} />
        <Route exact path="/LineChart" component={LineChart} />
        <Route exact path="/BarChart1" component={BarChart1} />
        <Route exact path="/PieChart" component={PieChart} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/" component={Hello} />
      </Router>
    </Provider>
  );
}

export default App;
