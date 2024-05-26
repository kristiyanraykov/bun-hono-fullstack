import { hc } from "hono/client";
import { type ApiRoutes } from "@server/app";
import { queryOptions } from "@tanstack/react-query";

const client = hc<ApiRoutes>("/");
export const api = client.api;

async function getCurrentUser() {
  const res = await api.me.$get();
  if (!res.ok) throw new Error("Failed to fetch current user");
  const data = await res.json();
  return data;
}

export const userQueryOptions = queryOptions({
  queryKey: ["get-current-user"],
  queryFn: getCurrentUser,
  staleTime: 1000 * 60 * 60 * 24,
});
