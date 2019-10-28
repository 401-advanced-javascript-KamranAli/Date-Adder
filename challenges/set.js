
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

  union(set) {
    const otherSet = new Set([]);
    for(let i = 0; i < this.array.length; i++) {
      otherSet.add(this.array[i]);
    }
    for(let j = 0; j < set.array.length; j++) {
      otherSet.add(set.array[j]);
    }
    return otherSet;
  }

  difference(set) {
    const otherSet = new Set([]);
    for(let i = 0; i < this.array.length; i++) {
      if(!set.array.includes(this.array[i])) {
        otherSet.add(this.array[i]);
      }
    }
    for(let j = 0; j < set.length; j++) {
      if(!this.array.includes(set.array[j]))
        otherSet.add(set.array[j]);
    }
    return otherSet;
  }

  static intersect(set1, set2) {
    const otherSet = new Set([]);
    for(let i = 0; i < set2.array.length; i++) {
      if(set1.array.includes(set2.array[i])) {
        otherSet.add(set2.array[i]);
      }
      return otherSet;
    }
  }

  static union(set1, set2) {
    const otherSet = new Set([]);
    for(let i = 0; i < set1.array.length; i++) {
      otherSet.add(set1.array[i]);
    }
    for(let j = 0; j < set2.array.length; j++) {
      otherSet.add(set2.array[j]);
    }
    return otherSet;
  }

  static difference(set1, set2) {
    const otherSet = new Set([]);
    for(let i = 0; i < set1.array.length; i++) {
      if(!set2.array.includes(set1.array[i])) {
        otherSet.add(set1.array[i]);
      }
    }
    for(let j = 0; j < set2.array.length; j++) {
      if(!set1.array.includes(set2.array[j])) {
        otherSet.add(set2.array[j]);
      }
      return otherSet;
    }
  }


}


module.exports = Set;