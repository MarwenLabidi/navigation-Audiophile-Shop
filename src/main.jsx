import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const mountNavigation = (el) => {
        ReactDOM.createRoot(el).render(
                <React.StrictMode>
                        <App />
                </React.StrictMode>
        );
};

if (!window.containerContext) {
        mountNavigation(document.getElementById("root"));
}

export { mountNavigation };
