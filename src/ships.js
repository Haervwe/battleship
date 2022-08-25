class ship {
  #size;
  #slots;
  #floats;
  constructor(size) {
    if (size < 1) {
      return;
    }
    this.#size = size;
    this.#slots = (() => {
      let array = [];
      for (let i = 0; i < size; i++) {
        array.push(1);
      }
      return array;
    })();
    this.#floats = true;
  }
  get size() {
    return this.#size;
  }
  get slots() {
    return this.#slots;
  }
  get floats() {
    return this.#floats;
  }
  checkfloat() {
    let check = this.slots.reduce((x, y) => x + y);
    if (check == 0) {
      this.#floats = false;
    }
  }
  /**
   * @param {number} n
   */
  shot(n) {
    if (n < this.#size && n >= 0) {
      this.#slots[n] = 0;
      this.checkfloat();
    }
  }
}

module.exports = ship;
