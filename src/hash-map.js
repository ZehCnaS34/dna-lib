// @flow
const { Node } = require("./node");


function hasher(object: any) {
  let output = 0;
  let str = JSON.stringify(object);
  for (const c of str) {
    output += c.charCodeAt(0)
  }
  return output;
}

class HashMap<K, V> {
  _values: (Node<[K, V]>|null)[];

  constructor(factor: number = 10) {
    this._values = new Array(factor).fill(null).map(() => null);
  }

  add(key: K, value: V) {
    let hash = hasher(key);
    const index = hash % this._values.length;
    let node = this._values[index];
    const kv = new Node([key, value]);
    if (node instanceof Node) kv.append(node);
    this._values[index] = kv;
  }

  get(key: K) {
    let hash = hasher(key);
    const index = hash % this._values.length;
    let node = this._values[index];
    while (node) {
      let [k, v] = node.data;
      if (k === key) {
        return v;
      }
      node = node.next
    }
    return null;
  }
}

export { HashMap };
