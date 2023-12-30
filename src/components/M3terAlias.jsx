import React from "react";
import seedrandom from "seedrandom";

import { Adjectives, Nouns } from "../words";

export const M3terAlias = (seed) => {
  const random = seedrandom(seed);
  let adj1 = Math.round(random() * 1808);
  let adj2 = Math.round(random() * 1808);
  let noun = Math.round(random() * 96);

  return (
    <>
      {Adjectives[adj1]} {Adjectives[adj2]} {Nouns[noun]}
    </>
  );
};
