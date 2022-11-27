import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import fa_IR from "antd/lib/locale/fa_IR";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider
        virtual={false}
        form={{ validateMessages: { required: "الزامی" } }}
        locale={fa_IR}
        direction="rtl"
      >
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
