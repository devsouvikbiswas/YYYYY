import { createAuthClient } from "better-auth/react";
import { BACKEND_API_URL } from "./constant";

export const authClient = createAuthClient({
  baseURL: `${BACKEND_API_URL}/api/auth`,
  trustedOrigins: [
    "null",
    "file://",
    "http://localhost:3000",
    "https://YOUR_WORKER_PROD_DOMAIN",
  ],
});
