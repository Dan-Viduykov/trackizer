import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./core/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);