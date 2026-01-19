import { TokenRefreshCtx } from "./TokenRefreshProvider.tsx";
import { use } from "react";

export const useTokenRefresh = () => use(TokenRefreshCtx);
