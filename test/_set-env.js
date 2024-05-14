import browserEnv from "browser-env";
import utils from "jsdom/lib/jsdom/living/generated/utils.js";
import { writeFileSync, unlinkSync } from "fs";

browserEnv(["window", "document"], {
    pretendToBeVisual: true,
    resources: "usable",
});

const map = {};
window.URL.createObjectURL = (blob) => {
    const uuid = Math.random().toString(36).slice(2);
    const path = `node_modules/.cache/${uuid}.png`;
    writeFileSync(path, blob[utils.implSymbol]._buffer);
    const url = `file://${path}`;
    map[url] = path;
    return url;
};
window.URL.revokeObjectURL = (url) => {
    unlinkSync(map[url]);
    delete map[url];
};
