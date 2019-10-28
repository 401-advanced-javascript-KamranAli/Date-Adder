
class Set {
  constructor(array) {
    this.array = array;
  }

  add(value) {
    if(!this.array.includes(value)) {
      this.array.push(value);
    }
  }

  remove(value) {
    if(this.array.includes(value)) {
      const number = this.array.indexOf(value);
      this.array.splice(number, 1);
    }
  }

  has(value) {
    return this.array.includes(value);
  }

  intersect(set) {
    const otherSet = new Set([]);
    for(let i = 0; i < this.array.length; i++) {
      if(set.array.includes(this.array[i])) {
        otherSet.add(this.array[i]);
      }
    }
    return otherSet;
  }









}

module.exports = Set;