# M3ter Attributes

Object describing m3ter-head attributes generated from the seed

### Usage:

1. Import the `m3terAttributes` component into your React code:

   ```javascript
   import * as React from "react";
   import { m3terAttributes } from "m3ters";
   ```

2. Generate the attributes within your component, providing your input string:

   ```jsx
   export default function Home() {
     const attributes = m3terAttributes("device_DID_string");
     console.log(attributes);
   }
   ```

3. Your function should return text content like shown below

   ```json
   {
     "name": "mighty distinct nanogear",
     "eyes": "happy",
     "mouth": "smile2",
     "texture": "dots",
     "color": "#0592f9",
     "seed": "device_DID_string"
   }
   ```

## Licensing

You are free to embed under the terms of the [CC0 1.0 Universal](./LICENSE) License.
