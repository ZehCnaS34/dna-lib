// @flow

class Node<T> {
  _data: any;
  _next: Node<T> | null;

  constructor(value: any) {
    this._data = value;
    this._next = null;
  }

  append(node: Node<T>) {
    this._next = node;
  }

  get data() {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }

  get next() {
    return this._next;
  }
}

export { Node };
