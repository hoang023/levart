import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./redux/reducers";
import mySaga from "./redux/sagas";
import App from "./App";
import "antd/dist/antd.min.css";
import GlobalStyles from "@/components/GlobalStyles/GlobalStyles";
import "@/components/GlobalStyles/AntdFix.css";
import { BrowserRouter } from "react-router-dom";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
// ReactDOM.render(
//   <Provider store={store}>
//     <GlobalStyles>
//       <App />
//     </GlobalStyles>
//   </Provider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Provider store={store}>
  <BrowserRouter>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </BrowserRouter>
</Provider>)
