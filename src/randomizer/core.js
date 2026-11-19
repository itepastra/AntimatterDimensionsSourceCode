import { Client } from "archipelago.js";

const GAME = "Antimatter Dimensions";

export const Randomizer = {
  client: new Client(),
  receivedItems: new Set(),

  setup(url, slotName) {
    const preData = localStorage.getItem("datapackage_cache");

    this.client.package.importPackage(JSON.parse(preData));
    this.client.login(url, slotName, GAME).then(() => console.log("Hawowa"));

    const postData = client.package.exportPackage();
    fs.writeFileSync("path/to/cache/datapackage_cache.json", JSON.stringify(postData), "utf8");
  },

  sendLocation(name) {
    const locationId = this.client.package.findPackage(GAME).locationTable[name];
    this.client.check(locationId);
  },
};
