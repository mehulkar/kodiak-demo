import { test } from "node:test";
import { strict as assert } from "node:assert";

test("it sometimes fails", () => {
  console.log(process.env); // TODO: figure out if it's a kodiak auto merge
  assert.equal(1, 1);
});
