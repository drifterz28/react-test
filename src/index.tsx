import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./reducer";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
