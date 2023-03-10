import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
