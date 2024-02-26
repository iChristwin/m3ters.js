import { m3terAlias } from "./alias";
import { m3terProps, eyeTypes, mouthType, textureType } from "../utils";

export const m3terAttributes = (seed) => {
  const { eyesIndex, mouthIndex, textureIndex, color } = m3terProps(seed);

  return {
    name: m3terAlias(seed),
    eyes: eyeTypes[eyesIndex],
    mouth: mouthType[mouthIndex],
    texture: textureType[textureIndex],
    color,
    seed,
  };
};
