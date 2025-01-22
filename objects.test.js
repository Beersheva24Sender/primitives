import { describe, it, expect, test } from "vitest";
import { getOccurrencesObject } from "./objects.js";

test("getOccurrencesObject", () => {
    const str = "aaabgbgc";
    let { a, b, g, c } = getOccurrencesObject(str);
    expect(a).toBe(3);
    expect(b).toBe(2);
    expect(g).toBe(2);
    expect(c).toBe(1);
});

test("tring with digits, space and hyphens", () => {
    const str = "1,d-   ";
    const res = getOccurrencesObject(str);
    console.log(res.space);
    expect(res.d).toBe(1);
    expect(res['1']).toBe(1);
    expect(res['-']).toBe(1);
    expect(res[' ']).toBe(3);
});

test("test for object as key inside another object", () => {
    const x = { x: 5 };
    const y = { y: 10 };
    const obj = { [x]: "value1", [y]: "value2" };
    expect(obj[x]).toBe("value2");
    expect(obj[y]).toBe("value2");

    const obj2 = obj;
    obj2[x] = "new value";
    expect(obj[x]).toBe("new value");
});

test("test for object as key inside another object", () => {
    const x = { x: 5 };
    x.toString = function () {
        return `x:${this.x}`; // or "x:" + this.x
    };

    const y = { y: 10 };
    const obj1 = {};
    obj1[x] = 200;

    const obj2 = obj1;
    obj2[y] = 300;

    expect(obj2[x]).toBe(200);
    expect(obj1["[object Object]"]).toBe(300);
    expect(obj1[{ z: 100 }]).toBe(300);

    console.log("printing object using log:", x);
    console.log("printing object using method toString:", x.toString());
});
