import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    //quertClient는 서버에서 받아오는 데이터를 캐시해주는 저장소
<QueryClientProvider client = {queryClient}>
    <App />
</QueryClientProvider>
);