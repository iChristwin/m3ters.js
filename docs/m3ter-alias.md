# M3ter Alias

Effortlessly create captivating names that instantly distinguish each device, and introduce a touch of personality.

### Usage:

1. Import the `M3terAlias` component into your React code:

   ```javascript
   import * as React from "react";
   import { M3terAlias } from "m3ters";
   ```

2. Render the alias within your component, providing a unique seed string for generation:

   ```jsx
   export default function Home() {
     return (
       <h2 style={{ "text-transform": "capitalize" }}>
         <M3terAlias seed={"device_DID_string"} />
       </h2>
     );
   }
   ```

3. Your browser should render text content like shown below
<h2><p align="center">Mighty Distinct Nanogear</p></h2>

## Credits

Inspired by a similar JavaScript library, [angry-purple-tiger](https://github.com/helium/angry-purple-tiger) developed by [Andrew Allen](https://twitter.com/allenan_) for the Helium Network.


## Licensing

You are free to embed under the terms of the [CC0 1.0 Universal](./LICENSE) License.
