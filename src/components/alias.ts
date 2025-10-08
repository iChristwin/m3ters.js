import { m3terProps } from "../utils";
import { Adjectives, Nouns } from "../words";

export const m3terAlias = (seed: string) => {
  const { adjIndex1, adjIndex2, nounIndex } = m3terProps(seed);
  return `${Adjectives[adjIndex1]} ${Adjectives[adjIndex2]} ${Nouns[nounIndex]}`;
};
