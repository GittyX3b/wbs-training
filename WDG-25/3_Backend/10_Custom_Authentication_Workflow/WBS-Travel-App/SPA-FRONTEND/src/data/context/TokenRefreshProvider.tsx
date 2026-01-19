import { createContext } from "react";

const TokenRefreshCtx = createContext(null);

const TokenRefreshProvider = ({ value, children }) => (
  <TokenRefreshCtx.Provider value={value}>{children}</TokenRefreshCtx.Provider>
);

export { TokenRefreshCtx, TokenRefreshProvider };
