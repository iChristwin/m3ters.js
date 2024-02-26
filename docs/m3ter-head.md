## M3ter Head

Avatars to infuse a touch of whimsy and individuality into the M3tering Protocol. Generate one-of-a-kind SVG avatars that serve as distinctive visual representations for device DIDs and blockchain address strings commonly encountered in the M3tering Protocol.

### Usage:

1. Import the `M3terHead` component into your React code:

   ```javascript
   import * as React from "react";
   import { M3terHead } from "m3ters";
   ```

2. Render the avatar within your component, providing a unique seed string for generation:

   ```jsx
   export default function Home() {
     return (
       <>
         <M3terHead seed={"device_DID_string"} size={80} />
       </>
     );
   }
   ```

3. Your browser should render an SVG image like the one shown below
<p align="center"><img src='./img/M3ter-head.svg'/></p>

## Credits

Inspired by the charming [Bottts](https://bottts.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley) and adapted from Magnusson's [Bottts Maker 🤖](https://github.com/magnusson/bottts-maker).

## Licensing

You are free to embed under the terms of the [CC0 1.0 Universal](./LICENSE) License.
