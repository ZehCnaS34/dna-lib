// @flow

type HeapValue = {
  value(): number
};

class Heap<V: HeapValue> {
  data: V[];

  hasParent(index: number): bool {
    return this.parent(index) != null;
  }

  hasChildren(index: number) {
    return this.rightChild(index) != null || this.leftChild(index) != null
  }

  get items() {
    return this.data;
  }

  get lastIndex() {
    return this.data.length - 1;
  }

  constructor() {
    this.data = []
  }

  parentIndex(cx: number) {
    return Math.floor((cx - 1) / 2);
  }

  leftChildIndex(px: number) {
    return 2 * px + 1;
  }

  rightChildIndex(px: number) {
    return 2 * px + 2;
  }

  parent(cx: number): V | void {
    return this.data[this.parentIndex(cx)];
  }

  leftChild(px: number): V | void {
    return this.data[this.leftChildIndex(px)];
  }

  rightChild(px: number): V | void {
    return this.data[this.rightChildIndex(px)];
  }

  throwInvalid() {
    if (this.data.length === 0) throw new Error("IllegalStateException");
  }

  peak() {
    this.throwInvalid();
    return this.data[0];
  }

  poll() {
    this.throwInvalid();
    const item = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this.heapifyDown();
    return item;
  }

  lt(r, l) {
    if (typeof r === "object" && typeof l === "object") {
      return r.value() < l.value()
    }
    return r < l;
  }

  gt(r, l) {
    if (typeof r === "object" && typeof l === "object") {
      return r.value() > l.value()
    }
    return r > l;
  }

  heapifyDown() {
    let index = 0;
    while (this.hasChildren(index)) {
      let smallerChildIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) != null &&
        this.lt(this.rightChild(index), this.leftChild(index))
      ) {
        smallerChildIndex = this.rightChildIndex(index);
      }

      if (this.lt(this.data[index], this.data[smallerChildIndex])) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
      if (smallerChildIndex === Infinity) break;
    }
  }

  heapifyUp() {
    let index = this.lastIndex;
    while (this.hasParent(index) && this.gt(this.parent(index), this.data[index])) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  swap(i1: number, i2: number) {
    const tmp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = tmp;
  }

  add(value: V) {
    this.data.push(value);
    this.heapifyUp();
  }
}


export { Heap };
