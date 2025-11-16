import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { store } from "./store";

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* HashRouter añade un # en la ruta y teoricamente tendria que funcionar */}
        {/* <HashRouter> */}
        <AppRouter />
        {/* </HashRouter> */}
      </BrowserRouter>
    </Provider>
  );
};
