import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { enableMsw } from "./utils/enableMsw";
import "~/styles/index.css";
import { App } from "~/App";

const queryClient = new QueryClient();

await enableMsw();

const el = document.querySelector("#root");
if (!el) throw new Error("Not found #root");

createRoot(el).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
