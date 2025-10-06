import { Camo1, Camo2, Dirty1, Dirty2, Dots } from "../parts/Textures";

interface TextureProps {
  type: number;
}
const types = {
  None: null,
  Camo1,
  Camo2,
  Dirty1,
  Dirty2,
  Dots,
};

const typeKeys = Object.keys(types) as (keyof typeof types)[];

export const Texture = (props: TextureProps) => {
  const Type = types[typeKeys[props.type]];
  return (
    <g id="texture_part" transform="translate(-10, 25) scale(1.3)">
      {Type && <Type />}
    </g>
  );
};
