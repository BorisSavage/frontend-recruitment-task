import { QueryClient, QueryClientConfig } from "@tanstack/react-query";
import { cache } from "react";

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

const getQueryClient = cache(() => new QueryClient(queryClientOptions));

export default getQueryClient;
