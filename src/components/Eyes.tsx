import {
  Arturito,
  Bulging,
  Dizzy,
  Eva,
  Frame1,
  Frame2,
  Glow,
  Hal,
  Happy,
  Hearts,
  Robocop,
  Round,
  RoundFrame1,
  RoundFrame2,
  Sensor,
  Shade,
} from "../parts/Eyes";

interface EyesProps {
  type: number; // The index in the typeKeys array
}

const types = {
  Arturito,
  Bulging,
  Dizzy,
  Eva,
  Frame1,
  Frame2,
  Glow,
  Hal,
  Happy,
  Hearts,
  Robocop,
  Round,
  RoundFrame1,
  RoundFrame2,
  Sensor,
  Shade,
};
const typeKeys = Object.keys(types) as (keyof typeof types)[];
export const Eyes = (props: EyesProps) => {
  const Type = types[typeKeys[props.type]];

  return (
    <g id="eyes_part" transform="translate(38, 76)">
      <Type />
    </g>
  );
};
