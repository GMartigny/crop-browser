import crop from "crop-universal";

/**
 * Load an image
 * @param {String} src - Path to the image
 * @returns {Promise<HTMLImageElement>}
 */
const loadImage = src => new Promise((resolve, reject) => {
    const image = new window.Image();
    image.src = src;
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", err => reject(err));
});
/**
 * Returns a canvas element
 * @param {Number} width - Width of the element
 * @param {Number} height - Height of the element
 * @returns {HTMLCanvasElement}
 */
const createCanvas = (width, height) => {
    const canvas = window.document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
};

const cropper = crop({
    loadImage,
    createCanvas,
});

const defaultOptions = {
    outputFormat: "png",
};

/**
 * @typedef {Object} Options
 * @prop {String} [outputFormat="png"] - Format of the output image (`"png"` or `"jpeg"`)
 */
/**
 * Crop transparent pixels from an image
 * @param {String|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} input - Path to the image to process or any type supported by `Canvas.prototype.drawImage`
 * @param {Options} [options] - Some options
 * @returns {Promise<HTMLImageElement>}
 */
export default async (input, options) => {
    const { outputFormat } = {
        ...defaultOptions,
        ...options,
    };

    const supportedFormat = ["png", "jpeg"];
    if (!supportedFormat.includes(outputFormat)) {
        const supported = JSON.stringify(supportedFormat);
        throw new Error(`outputFormat should only be one of ${supported}, but "${outputFormat}" was given.`);
    }

    const canvas = await cropper(input, options);

    return new Promise((resolve) => {
        const result = new window.Image();
        canvas.toBlob((blob) => {
            const url = window.URL.createObjectURL(blob);
            result.src = url;

            const cleanup = () => {
                window.URL.revokeObjectURL(url);
                result.removeEventListener("load", cleanup);
            };
            result.addEventListener("load", cleanup);

            resolve(result);
        }, `image/${outputFormat}`);
    });
};
