# crop-browser

[![Package version](https://flat.badgen.net/npm/v/crop-browser)](https://www.npmjs.com/package/crop-browser)
[![Package size](https://flat.badgen.net/bundlephobia/minzip/crop-browser)](https://bundlephobia.com/result?p=crop-browser)

Crop all transparent pixel around an image's edges.


## Installation

### NPM

You'll then need to bundle your code with [a bundler](https://parceljs.org/).

    npm install crop-browser

### CDN

You don't need installation, just import from a CDN.

## Usage

```js
// With NPM
import crop from "crop-browser";
// Or simply use directly
import crop from "https://www.unpkg.com/crop-browser";

// Run the async function and display the result
(async () => {
    const cropped = await crop("path/to/image.png");
    // Display the file (for example)
    document.body.appendChild(cropped);
})();
```

## Documentation

### `crop(input, [options])`

| Name    | Type          | Default     | Comment                                                                                                                                                                              |
|---------|---------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| input   | `String\|any` | required    | Path to the image to process or any [type supported by `Canvas.prototype.drawImage`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage#Parameters) |
| options | `Options`     | (see below) | Some options                                                                                                                                                                         |

### `options`

| Name         | Type     | Default | Comment                                          |
|--------------|----------|---------|--------------------------------------------------|
| outputFormat | `String` | `"png"` | Format of the output image (`"png"` or `"jpeg"`) |

In addition, all [options of `detect-edges`](https://github.com/GMartigny/detect-edges#options) are supported.


## Related

 - Only want to detect content edges, see [`detect-edges`](https://github.com/GMartigny/detect-edges)
 - For the Node.js version see [`crop-node`](https://github.com/GMartigny/crop-node)
 - For a CLI version see [`crop-node-cli`](https://github.com/GMartigny/crop-node-cli)


## License

[MIT](license)
