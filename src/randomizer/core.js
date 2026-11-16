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
