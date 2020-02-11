# crop-browser

[![Package version](https://flat.badgen.net/npm/v/crop-browser)](https://www.npmjs.com/package/crop-browser)
[![Package size](https://badgen.net/bundlephobia/minzip/crop-browser)](https://bundlephobia.com/result?p=crop-browser)

Crop all transparent pixel around an image's edges.


## Installation

    npm install crop-browser


## Usage

```js
import crop from "crop-browser";

// Path to an image file
const path = "path/to/image.png";
const options = {
    outputFormat: "png",
};
// Run the async function and display the result
(async () => {
    const cropped = await crop(path, options);
    // Display the file (for example)
    document.body.appendChild(cropped);
})();
```

## Documentation

### `crop(input, [options])`

| Name | Type | Default | Comment |
| --- | --- | --- | --- |
|input |`String\|any` |required |Path to the image to process or any [type supported by `Canvas.prototype.drawImage`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage#Parameters) |
|options |`Options` |(see below) |Some options |

### `options`

| Name | Type | Default | Comment |
| --- | --- | --- | --- |
|outputFormat |`String` |`"png"` |Format of the output image (`"png"` or `"jpeg"`) |

In addition, all [options of `detect-edges`](https://github.com/GMartigny/detect-edges#options) are supported.


## Related

 - Only want to detect content edges, see [`detect-edges`](https://github.com/GMartigny/detect-edges)
 - For the nodeJS version see [`crop-node`](https://github.com/GMartigny/crop-node)
 - For a CLI version see [`crop-node-cli`](https://github.com/GMartigny/crop-node-cli)


## License

[MIT](license)
