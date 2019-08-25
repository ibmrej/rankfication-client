import React from "react";
import { Provider } from "react-redux";
import store from "@/store/index";
import Routes from "@/routes";
import App from "@/containers/App";

import Header from "@/components/Page/Header";
import Navbar from "@/components/Page/Navbar";

const RootComponent = () => (
  <Provider store={store}>
    <App>
      <Routes>
        <Header />
        <Navbar />
      </Routes>
    </App>
  </Provider>
);

export default RootComponent;
