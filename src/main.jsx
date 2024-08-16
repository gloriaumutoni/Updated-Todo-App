import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import loginReducer from './features/loginFeature.jsx'
import searchbar from './features/todoFeature.jsx'
import './index.css';

let store = configureStore({
  reducer: {
    user: loginReducer,  
    input:searchbar
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
