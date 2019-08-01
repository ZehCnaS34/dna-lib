const { Heap } = require("./heap");

test("awesome", () => {
  let heap = new Heap();
  heap.add(1)
  heap.add(0)
  heap.add(4)
  console.log(heap);
});
