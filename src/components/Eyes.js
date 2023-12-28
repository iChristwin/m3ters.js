import React from "react";

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

const Eyes = (props) => {
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
  const typeKeys = Object.keys(types);
  const Type = types[typeKeys[props.type]];
  return (
    <g id="eyes_part" transform="translate(38, 76)">
      <Type />
    </g>
  );
};

export default Eyes;
