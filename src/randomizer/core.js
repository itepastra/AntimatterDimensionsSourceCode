import { Client } from "archipelago.js";

const GAME = "Antimatter Dimensions";

export function installCore() {
  patchUpgrades();
}

function patchUpgrades() {
  const upgrades = [
    ...InfinityUpgrade.all.filter((u) => u.config.id != "ipMult"),
    ...BreakInfinityUpgrade.all,
    ...EternityUpgrade.all.filter((u) => u.config.id != "epMult"),
    ...Perk.all,
  ];
}

export const Randomizer = {
  client: new Client(),
  receivedItems: new Set(),

  sendLocation(name) {
    const locationId = this.client.package.findPackage(GAME).locationTable[name];
    this.client.check(locationId);
  },
};
