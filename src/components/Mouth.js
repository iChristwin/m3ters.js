import {
  Arturito,
  Bite,
  Diagram,
  Grill1,
  Grill2,
  Grill3,
  Robocop,
  Smile1,
  Smile2,
  Square1,
  Square2,
} from "../parts/Mouths";

const Mouth = (props) => {
  const types = {
    None: null,
    Arturito,
    Bite,
    Diagram,
    Grill1,
    Grill2,
    Grill3,
    Robocop,
    Smile1,
    Smile2,
    Square1,
    Square2,
  };
  const typeKeys = Object.keys(types);
  const Type = types[typeKeys[props.type]];
  return (
    <g id="mouth_part" transform="translate(52, 124)">
      {Type && <Type />}
    </g>
  );
};
export default Mouth;
