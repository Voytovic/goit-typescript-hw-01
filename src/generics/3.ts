function merge<T>(objA: T, objB: T): T {
  return Object.assign({}, objA, objB);
}
