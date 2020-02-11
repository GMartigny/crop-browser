import test from "ava";
import crop from "..";

const run = async (name) => {
    const res = await crop(`file://test/fixtures/${name}.png`);
    return new Promise((resolve) => {
        res.addEventListener("load", () => resolve(res));
    });
};

test("drawing", async (t) => {
    const res = await run("drawing");
    t.is(res.constructor.name, "HTMLImageElement");
    t.is(res.width, 77);
    t.is(res.height, 71);
});

test("full", async (t) => {
    const res = await run("full");
    t.is(res.width, 100);
    t.is(res.height, 100);
});

test.cb("input canvas", (t) => {
    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 200;
    const context = canvas.getContext("2d");
    context.fillRect(10, 20, 10, 20);

    crop(canvas)
        .then((res) => {
            res.addEventListener("load", () => {
                t.is(res.width, 10);
                t.is(res.height, 20);
                t.end();
            });
        });
});

test("transparent", async (t) => {
    await t.throwsAsync(() => run("transparent", {
        message: "Can't detect edges.",
    }));
});

test("bad output format", async (t) => {
    await t.throwsAsync(() => crop("file.png", {
        outputFormat: "what",
    }), {
        message: /but "what" was given.$/,
    });
});

test("no file", async (t) => {
    await t.throwsAsync(() => crop(), {
        message: "No input given.",
    });
    await t.throwsAsync(() => crop(""), {
        message: "No input given.",
    });
    // TODO: Why is it an "Returned promise rejected with exception that is not an error" ?
    // await t.throwsAsync(() => crop("whoot.png"), {
    //     message: /no such file/i,
    // });
});
