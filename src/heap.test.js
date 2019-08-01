const { Heap } = require("./heap");

test("poll should remove items in order", () => {
  const h = new Heap();
  h.add(34);
  h.add(23);
  h.add(1);
  expect(h.poll()).toEqual(1);
  expect(h.poll()).toEqual(23);
  expect(h.poll()).toEqual(34);
});
