const { Heap } = require("./dist/main");

const h = new Heap();

h.add(32);
h.add(2);
h.add(1);
h.add(34);

module.exports = h
