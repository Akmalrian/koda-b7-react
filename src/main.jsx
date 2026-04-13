import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
// import AppPokemon from './AppPokemon.jsx'
import AppRouter from "./AppRouter.jsx";
import { BrowserRouter } from "react-router";
import LoginProvider from "./authContext/Provider.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LoginProvider>
          <AppRouter />
        </LoginProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
