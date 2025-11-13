// this is the index.js
import network from "./modules/network.js";
import storage from "./modules/storage.js";
import ui from "./modules/ui.js";

network.sanityCheck();
storage.sanityCheck();
ui.sanityCheck();

console.log("index.js ok");
