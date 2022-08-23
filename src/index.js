class ship {
  constructor(size) {
    this.size = size;
    this.slots = () => {
      let array = [];
      for (let i = 0; i < size; i++) {
        array.push(1);
      }
      return array;
    };
  }
}
