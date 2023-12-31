# `m3ters.js`

Introducing m3ters.js, a React toolkit meticulously crafted to empower developers with seamless management of complex cryptographic strings within the M3tering Protocol.

This versatile library empowers developers with:

- **Seamless Integration:** Effortlessly incorporate m3ters.js components and functions into your React projects, streamlining development and reducing complexity.

- **Protocol Adherence:** Interact with M3tering Protocol elements confidently, ensuring compliance with protocol-specific requirements and best practices.

## Featured React Components

### [M3ter Alias](./docs/m3ter-alias.md#m3ter-alias): Transform Unwieldy Identifiers

Effortlessly convert those eye-straining crypto strings into captivating and user-friendly aliases, seamlessly integrated within your React applications. Representing IDs in a way you can actually remember.

### [M3ter Head](./docs/m3ter-head.md#M3ter-Head): Unique SVG Avatars

Generate unique and captivating SVG avatars that serve as visual representations for device DIDs and blockchain addresses, enhancing user engagement and brand recognition.

## Installation Options

m3ters.js offers flexible installation methods to cater to your preferred workflow:

### 1. Using a Package Manager:

Open your terminal or command prompt and navigate to your project's root directory. Then, execute the following command:

- **npm:** `npm i --save m3ters`
- **yarn:** `yarn add m3ters`

If you prefer a package manager other than npm or yarn, you can also try:

- **pnpm:** `pnpm install m3ters`
- **Bower:** `bower install m3ters`

### 2. CDN Link:

- Include the following script tag in your HTML file:

```html
<script src="https://unpkg.com/m3ters@latest/dist/m3ters.min.js"></script>
```

### 3. Direct Download:

- Access the m3ters.js repository on GitHub: [here](https://github.com/iChristwin/m3ters.js/releases)
- Download the latest `.zip` or `.tar.gz` file containing the library source code.
- Extract the contents into your project's directory.
- Import components directly from the extracted files.

## Usage

Added the React components from `m3ters.js` into code via named imports

```javascript
import { M3terAlias, M3terHead } from "m3ters";
```

See [M3ter Alias](./docs/m3ter-alias.md#m3ter-alias) and [M3ter Head](./docs/m3ter-head.md#M3ter-Head) for more usage documentation.

## Compatibility

The library was developed, tested and is guaranteed to function properly on

- node `19.0.0`
- npm: `9.8.1`
- react: `18.2.0`

## Example App

Check out the my example GitHub repo, [ichristwin/demo-m3ters](https://github.com/ichristwin/demo-m3ters). You could also experience the live implementation of at https://m3ters.ichristwin.com

### Other projects using `m3ters.js`

-

## Contributing

See the [contributing docs](./CONTRIBUTING.MD) for more information on how to contribute code.

## Licensing

You are free to embed under the terms of the [CC0 1.0 Universal](./LICENSE) License.
