import { assertStrictEquals } from "https://deno.land/std@0.106.0/testing/asserts.ts";

Deno.test({
  name: "testing example 1",
  fn() {
    assertStrictEquals("world", "world");
    // assertStrictEquals("world", "world2");
    // assertStrictEquals({ hello: "world" }, { hello: "world" });
  },
});

Deno.test({
  name: "testing example 2",
  fn() {
    // assertStrictEquals("world", "world");
    assertStrictEquals("world", "world2");
    // assertStrictEquals({ hello: "world" }, { hello: "world" });
  },
});
