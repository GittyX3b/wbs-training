import { use } from "react";

import { PokeDataCtx } from "@context/PokeDataProvider";

export const usePokeData = () => use(PokeDataCtx);
