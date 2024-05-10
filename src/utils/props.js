import seedrandom from "seedrandom";

export function m3terProps(seed) {
  const random = seedrandom.alea(seed);
  const eyesIndex = Math.round(random() * 15);
  const mouthIndex = Math.round(random() * 11);
  const textureIndex = Math.round(random() * 5);
  const color = "#" + random().toString(16).slice(2, 8);

  const adjIndex1 = Math.round(random() * 1808);
  const adjIndex2 = Math.round(random() * 1808);
  const nounIndex = Math.round(random() * 96);

  return {
    eyesIndex,
    mouthIndex,
    textureIndex,
    color,
    adjIndex1,
    adjIndex2,
    nounIndex,
  };
}
